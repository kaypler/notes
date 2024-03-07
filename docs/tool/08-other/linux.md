# Linux 命令备忘录

## Centos7

### shutdown
- 关机： `shutdown -h now`
- 重启：`shutdown -r now`

### 安装 VirtualBox 增强功能
```bash
# 查看可挂载的磁盘
> lsscsi
# 创建磁盘挂载目录
> mkdir /mnt/cdrom
# 挂载指定磁盘
> mount /dev/sr0 /mnt/cdrom
# 查看是否挂载
> cd /mnt/cdrom
# 安装增强功能
> sh ./VBoxLinuxAdditons.run
# 卸载已挂载磁盘
> umount /dev/sr0
```

### 命令行中复制和粘贴
```bash
# 安装gpm
> yum install -y gpm
# 开启gpm服务
> systemctl start gpm
# 按住鼠标左键，选中想要复制的内容，松开就完成复制，再在复制的位置按右键就完成粘贴。
```
