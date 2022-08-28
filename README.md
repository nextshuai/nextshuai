# 微信小程序——校园二手回收

微信小程序——校园二手回收，是针对校园二手回收方面推出的一套欠完整的二手商城方案，实现了用户可自行发布自己的闲置物品或者求购物品，同时实现物品交易以及消息通知，以及购买订单发送等，欠缺部分是未能接入支付功能！欢迎大家下载部署到自己的校园哦！后续如果有更好的功能我还会持续更新发布。

大家如果在使用过程有什么问题，欢迎通过以下联系方式与开发者交流！

如果本项目对您有所帮助或者启发，请给我们 Star 吧，您的鼓励是我们最大对动力～

# 招募开发者

希望找一些志同道合的朋友一起来完善这个开源项目，持续更新下去，有兴趣的可以与我联系，期待您的加入！

# 解忧旧物小铺 扫码体验

<img src="https://shoot.photo/images/2022/08/27/QxPkp.jpg" width="200px">


# 微信交流

| 开发者 |
| :------: |
| <img src="https://shoot.photo/images/2022/08/27/QxECr.jpg" width="200px">|

# 本项目使用了下面的组件，在此鸣谢

- [vant-UI库](https://youzan.github.io/vant-weapp/)

- [小程序在线接口-SDK](https://github.com/gooking/apifm-wxapi)

# 使用教程
## 注册开通小程序账号
https://mp.weixin.qq.com/
根据自己的实际情况选择 “企业”、“个体工商户”身份，注册小程序账号，商城类小程序不支持个人用户上线，所以一定要选择企业或者个体户（如果您是个人开发者，也可以联系开发者帮您处理），获得你自己小程序的 appid 和 secret 信息，保存好，下面会用到：
- [如何查看小程序的AppID和AppSecret](https://jingyan.baidu.com/article/642c9d340305e3644a46f795.html)
你需要设置小程序的合法域名，否则开发工具上运行正常，手机访问的时候将看不到数据
- [设置合法服务器域名](https://www.it120.cc/help/tvpou9.html)
## 下载安装开发工具
https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
## 运行小程序看效果
双击运行第一步安装的小程序开发工具，打开看效果：

<img src="https://dcdn.it120.cc/yuque/0/2019/png/572726/1575349127431-00ff2059-dd5e-4e4b-99a7-e1d605db02c7.png?x-oss-process=image%2Fresize%2Cw_1500 " width="200px">

导入项目这里，目录选择你 “第二步” 中下载并加压的小程序代码所在目录

APPID 务必要改成你自己的小程序的 APPID
APPID 务必要改成你自己的小程序的 APPID
APPID 务必要改成你自己的小程序的 APPID

然后点击导入按钮

- [如何查看小程序的AppID和AppSecret](https://jingyan.baidu.com/article/642c9d340305e3644a46f795.html)

## 配置对接你自己的后台
在开发工具中 config.js 中的env 改成你自己云id，配置自己的学校信息，以及导航栏信息，ctrl + s 保存
按照注释修改成为自己的信息

<img src="https://shoot.photo/images/2022/08/27/QxQLR.png?x-oss-process=image%2Fresize%2Cw_1500 " width="200px">


## 配置数据库集合

开发者需在自己的云后台配置小程序所需要的集合，且需上传所有的云函数：

- 集合名 chatroom、collection、messages、order、publish、publish_qg、rooms、user
- 参数值 修改所有集合的权限为自定义权限："read": true, "write": true
- 开发者需将node_modeles.zip压缩包解压并放在云函数"his"、"login"、"pay"、"ref"、"regist"中，但不用上传云函数库。


## 配置消息推送服务
https://mp.weixin.qq.com/

在自己的小程序后台，选择类目为环保回收/废品回收，然后按照我的模板信息配置自己的模板信息，获取自己的模板id

<img src="https://shoot.photo/images/2022/08/27/QxF78.png?x-oss-process=image%2Fresize%2Cw_1500 " width="200px">
<img src="https://shoot.photo/images/2022/08/27/Qxufc.png?x-oss-process=image%2Fresize%2Cw_1500 " width="200px">


# 常见问题

## 无法登陆 / 无法获取 openid

1. 请检查 index.js 文件中的 rejist云函数中是否已经修改成你自己的专属云id了

2. 确保下面3个地方的 云id 你填的是一样的

    - config.js中的env是否修改为自己的id
    - 云函数中的配置是否修改为自己的id
    - 有些页面需单独再次获取登录情况的是否改为自己的id

## 消息推送失败

https://mp.weixin.qq.com/

首先得去自己的小程序后台获取自己的模板id，查看自己的模板内容是否与我的一致，模板id是否正确，然后覆盖原本的模板id

## 进入私聊页面无法获取登录信息

建议源码copy后不要修改message页面的内容，如发现问题未能解决的，请联系开发者


# 尾声
若果您觉得此小程序对您有所帮助，欢迎打赏开发者哦~

<img src="https://shoot.photo/images/2022/08/27/QxvM6.jpg " width="200px">
