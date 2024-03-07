# Android

## adb 的构成和工作原理
**ADB** 全名 Android Debug Bridge，是一个调试工具。adb 包含三部分：
1. **Client端**：运行在开发机器中，即你的开发电脑，用来发送 adb 命令；
2. **Daemon守护进程**：运行在调试设备中，手机或模拟器，用来接收并执行 adb 命令；
3. **Server端**：同样运行在开发机器中，用来管理 Client 端和手机的 daemon 之间的通信；

## adb 常见命令
1. `adb devices` - 显示已连接的 Android 设备列表。
2. `adb shell` - 进入设备的命令行模式。
3. `adb install <path_to_apk>` - 安装一个 Android 应用程序。
4. `adb uninstall <package_name>` - 卸载一个 Android 应用程序。
5. `adb pull <path_on_device> <path_on_computer>` - 将设备上的文件复制到计算机上。
6. `adb push <path_on_computer> <path_on_device>` - 将计算机上的文件复制到设备上。
7. `adb logcat` - 查看设备的日志输出。
8. `adb reboot` - 重启设备。
9. `adb shell am start <package_name>/<activity_name>` - 启动一个 Android 应用程序的活动。
10. `adb shell am force-stop <package_name>` - 强制停止一个 Android 应用程序。
11. `adb kill-server` - 关闭服务
12. `adb start-server` - 启动服务

获取应用包名和界面名：
`adb shell dumpsys window windows | grep mFocusedApp`

获取应用启动时间：
`adb shell am start -W  <package_name>/<activity_name>`

- **ThisTime**: 该界面（activity）启动耗时（毫秒）
- **TotalTime**: 应用自身启动耗时 = ThisTime + 应用资源启动时间（毫秒）
- **WaitTime**: 系统启动应用耗时 = TotalTime + 系统资源启动时间（毫秒）

获取系统处理器架构：
`adb shell getprop ro.product.cpu.abilist`

## 多用户场景
1. 查看用户：`adb shell pm list users`，（默认是一个用户userId是0）；
2. 创建用户：`adb shell pm create-user <user_id>`；
3. 启动用户： `adb shell am start-user <user_name>`；
4. 最多启动用户数量：`adb shell pm get-max-users`；
5. 切换用户：`adb shell am switch-user <user_id>`；
6. 指定用户安装软件：`adb install --user <user_id> <path_to_apk>`；

