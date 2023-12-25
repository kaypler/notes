# Stable Diffusion

## 安装

1. 安装 Python 环境 <br>
要求 python 版本是 `3.10.6`，Mac 上使用 anaconda3 自带的 3.11.5 版本目测可行

2. 下载 webui <br>
```shell
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
```

3. 下载主模型 <br>
打开 [https://huggingface.co/runwayml/stable-diffusion-v1-5/tree/main](https://huggingface.co/runwayml/stable-diffusion-v1-5/tree/main)，选择 `v1-5-pruned-emaonly.ckpt` 或者 `v1-5-pruned-emaonly.safetensors` 下载。下载成功后复制到 `stable-diffusion-webui/models/Stable-diffusion` 中。

4. 启动 webui <br>
```shell
# 如果需要更新 webui，执行 git pull
./webui.sh
```

## 参考
[1. Installation on Apple Silicon](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Installation-on-Apple-Silicon)
