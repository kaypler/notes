# Docker

## Command

- Creating a Container: `docker create <image name>`
- Start a Container: `docker start <container id>`
- Creating and Running a Container from an Image: `docker run <image name> command!`
- List all running containers:  `docker ps`
- Delete all the Containers: `docker system prune`
- Get logs from a container: `docker logs <container id>`
- Stop a Container: `docker stop <container id>`
- Kill a Container: `docker kill <container id>`
- Execute an additional command in a container: `docker exec -it <container id> <command>`
- Push a image to docker hub: `docker push <image name>`
  
## Docker Hub
[https://hub.docker.com/](https://hub.docker.com/)


## Build a node server image
1. 项目根目录创建 Dockerfile:
```
# Use an existing docker image as a base
FROM node:18

# Specifying a Working directory
WORKDIR /usr/app

# Download and install a dependency
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Tell the image what to do when it starts
# as a container
CMD ["npm", "start"]
```

2. 构建：`docker build -t <docker id>/<project name>:<version> .`

3. 端口映射：`docker run -p 8080:8080 <image name>`

## Kubernetes
- **Cluster**: A collections of nodes + a master to manage them.
- **Node**: A virtual machine that will run our containers. 
- **Pod**: More or less a running container. Technically, a pod can run multiple containers.
- **Deployment**: Monitors a set of pods, make sure they are running and restarts them if they crash. 
- **Service**: Provides an easy-to-remember URL to access a running container. 

### Kubernetes Command
- Print out information about all of the running pods: `kubectl get pods`;
- Execute the given command in a running pod: `kubectl exec -it [pod_name] [cmd]`;
- Print out logs from the given pod: `kubectl logs [pod_name]`;
- Deletes the given pod: `kubectl delete pod [pod_name]`;
- Tells kubernetes to process the config: `kubectl apply -f [config file name]`;
- Print out some information about the running pod: `kubectl describe pod [pod_name]`;

### Deployment Command
- List all the running deployments: `kubectl get deployments`;
- Print out details about a specific deployment: `kubectl describe deployment [depl_name]`;
- Create a deployment out of a config file: `kubectl apply -f [config file name]`;
- Delete a deployment: `kubectl delete deployment [depl_name]`;

### Create a pod
1. 创建 posts.yaml:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: posts
spec:
  containers:
    - name: posts
      image: kaypler/posts:0.0.1  
```

2. 应用配置
`kubectl apply -f posts.yaml`

3. 查看 pods
`kubectl get pods`

### Create a deployment
1. 创建 posts-depl.yaml:
```yaml
apiVersion: v1
kind: Deployment
metadata:
  name: posts-depl
spec:
  replicas: 1
  selectors:
    matchLabels:
      app: posts
  template:
    metadata:
      labels:
        app: posts
    spec:
      containers:
        - name: posts
          image: kaypler/posts:latest
```

2. 应用配置
`kubectl apply -f posts-depl.yaml`

3. 查看 deployments
`kubectl get deployments`

4. 重新部署
`kubectl rollout restart deployment [depl_name]`

### Types of Service
- **Cluster IP**: sets up an easy-to-remember URL to access a pod. Only exposes pods in the cluster. 
- **Node Port**: Makes a pod accessible from outside the cluster. Usually only used for dev purposes.
- **Load Balancer**: Makes a pod accessible from outside the cluster. THis is the right way to expose a pod to the outside world.
- **External Name**: Redirects an in-cluster request to a CNAME url...don't worry about this one...

### NodePort Service
posts-srv.yaml:
```yaml
apiVersion: v1
kind: Service
metadata:
  name: posts-srv
spec:
  type: NodePort
  selectors:
    app: posts
  ports:
    - name: posts
      protocol: TCP
      port: 4000
      targetPort: 4000
```

Assigned a random port to access: localhost:30403

### Cluster IP Service
event-bus-depl.yaml:
```yaml
apiVersion: v1
kind: Deployment
metadata:
  name: event-bus-depl
spec:
  replicas: 1
  selectors:
    matchLabels:
      app: event-bus
  template:
    metadata:
      labels:
        app: event-bus
    spec:
      containers:
        - name: event-bus
          image: kaypler/event-bus
---
apiVersion: v1
kind: Service
metadata:
  name: event-bus-srv
spec:
  type: ClusterIP
  selectors:
    app: event-bus
  ports:
    - name: event-bus
      protocol: TCP
      port: 4005
      targetPort: 4005          
```

access: http://event-bus-srv:4005

### Load Balance Service
ingress-nginx: Project that will create a Load Balancer Service + an Ingress for us. [ref](https://kubernetes.github.io/ingress-nginx/)

ingress-src.yaml:
```yaml
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: ingress-srv
  annotations:
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/use-regex: 'true'
spec:
  rules:
    - host: posts.com
      http:
        paths:
          - path: /posts/create
            backend:
              serviceName: posts-clusterip-srv
              servicePort: 4000
          - path: /posts
            backend:
              serviceName: query-srv
              servicePort: 4002
          - path: /posts/?(.*)/comments
            backend:
              serviceName: comments-srv
              servicePort: 4001
          - path: /?(.*)
            backend:
              serviceName: client-srv
              servicePort: 4003        

```

## Skaffold
1. 根目录创建 skaffold.yaml:
```yaml
apiVersion: skaffold.v2alpha3
kind: Config
deploy: 
  kubectl:
    manifests:
      - ./infra/k8s/*
build:
  local:
    push: false
  artifacts:
    - image: kaypler/client
      context: client
      docker:
        dockerfile: Dockerfile
      sync:
        manual:
          - src: 'src/**/*.js'
            dest: .
    - image: kaypler/comments
      context: comments
      docker:
        dockerfile: Dockerfile
      sync:
        manual:
          - src: '*.js'
            dest: .
    - image: kaypler/event-bus
      context: event-bus
      docker:
        dockerfile: Dockerfile
      sync:
        manual:
          - src: '*.js'
            dest: .                            
```

2. 启动：`skaffold dev`
