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
