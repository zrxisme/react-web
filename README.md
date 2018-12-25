react-web是一个结合了react全家桶和antd开发而成的后台开发模板，本地下载后可直接进行配置使用，其中包含的主要功能包括，页面响应式布局，路由权限控制，地图，富文本，代码编辑器等功能，具体页面如下：

>笔者最近使用react全家桶开发项目的过程中，发现后台网站之间功能内容差异较小，样式布局也大同小异，为提高网站开发的效率，同时也为了解放前端的生产力，所以打造了react-web这个react后台网站开发模板

* 功能简介
* 路由跳转
* 状态管理
* 本地存储
* 权限控制
* 统一的UI风格
* 同时还集成了react社区常用的插件，例如富文本编辑器、代码编辑器、excel表导入数据、百度地图、echars等，简单实用，易于配置。
 

>在开发过程中笔者注意组件化的开发方式，同时代码也注意书写风格，还结合了eslint做为语法检查的工具，通过配合`antd `框架，使页面风格十分简洁实用。


&emsp;**1、登陆页面**

登陆页面采用极简风格，只需要输入登录用户名和密码即可成功登陆（提示：如果需要注册功能或者找回密码功能只需添加相应的按钮即可）
![图](https://user-gold-cdn.xitu.io/2018/12/25/167e39481c27f2ee?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
核心代码如下

       handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const {username, password} = values
                if (username === 'admin' && password === 'admin') {
                    let content = this.props.loginClick({ ...values, token: 'user_token' })
                    this.context.router.push("/")
                }

            }
        });
    }
主要是通过在前端进行验证用户输入，然后调用`redux`进行保存用户的登陆状态，从而进行用户的身份验证，应为只是后台模板，为了方便大家书写自己的逻辑，笔者已经把后端代码抽离出来，如果需要后台的话这里可能还要进行异步处理，这里各位可以结合自己的需要进行配置



**2、首页**

首页主要是网站重要信息的展示，这里结合了百度的echars进行首页的展示，大家查看源码即可明白其中的配置，这里主要说一下身份验证和侧面菜单栏的展示，首先看下首页效果

![图](https://user-gold-cdn.xitu.io/2018/12/25/167e39c3fe334c95?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



页面顶部主要是个人的信息和一些提示信息，这里重要的是模板配置了面包屑导航，方便用户可以回退到历史浏览记录，在这里，我设置的默认配置是登出后清除历史浏览记录的选项，因为考虑到笔者在实际开发过程中使用到了身份验证功能，这就导致了面包屑导航的浏览记录并不适用于所有身份的用户，如需保留可以直接修改配置项，把`清除选项注释掉`就好

这里是一些主要的代码
```
      export function clearMessage() {
       Cookies.set(ROUTER_HISTORY, {}, { expires: 0 })
        Cookies.set(LOGIN_TOKEN, '', { expires:0 }) }
```
//页面登出,清除token和历史记录



在首页的侧边栏菜单是根据路由配置自动生成的，大大节约了开发者的路由配置时间，同时做了用户的身份验证，这样一来开发者可以通过验证用户身份来展示不同的页面，这是一个重要的功能，这里只贴出了部分代码

     const routes = [{
      path: "/",     //侧面菜单栏的路由必须是根路由的子路由哦！
      name: 'first-page',
      component: Main,
      meta: {
        icon: 'home',
        title: '首页',
        hideInMenu: false,
        access: ['student'],
        },
       indexRoute: { component: Home },
       childRoutes: [
        {
            path: "person",
            name: 'person-page',
            component: Person,
            onEnter: onRouteEnter,
            meta: {
                icon: 'team',
                title: '个人中心',
                hideInMenu: false,
                access: ['student'],
            }
        }, {
            path: "editor",
            name: 'editor-page',
            component: MyEditor,
            onEnter: onRouteEnter,
            meta: {
                icon: 'read',
                title: '富文本编辑器',
                hideInMenu: false,
                access: ['student'],
            }
        }, 
需要注意以下几点

只有配置在根路由下的子路由才会在侧面菜单栏中显视
meta对象里面的配置一定要填写，其中`icon表示菜单栏图标`，`title表示名称`，`hideMenu表示是否显示该菜单`，`access是用户权限控制`
onRouteEnter是路由的生命周期函数，主要用于对用户的身份认证和路由过滤


**3、其他功能插件**

这里主要说下结合react社区提供的开发模块，给网站配置了一些常用的功能，例如富文本编辑器、代码编辑器、excel表导入数据、百度地图、echars等

* 3.1富文本编辑器，这里主要用到了react-draft-wysiwyg这个插件

![图](https://user-gold-cdn.xitu.io/2018/12/25/167e3adef1621ddb?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)





* 3.2代码编辑器、这里用到了react-monaco-editor这个插件
![图](https://user-gold-cdn.xitu.io/2018/12/25/167e3af3f8274faf?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)





* 3.2 excel表导入数据，这是一个实际开发中非常实用的功能
![图](https://user-gold-cdn.xitu.io/2018/12/25/167e3b025654d695?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)






核心代码如下

     readFile(file) {
        const reader = new FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadstart = e => {
            this.setState({
                uploadLoading: false,
                tableLoading: false,
                showProgress: true
            })
        }
        reader.onprogress = e => {
            this.progressPercent = Math.round(e.loaded / e.total * 100)
        }
        reader.onerror = e => {
            message.error('文件读取出错')
        }
        reader.onload = e => {
            message.info('文件读取成功')
            const data = e.target.result
            const { results } = excel.read(data, 'array')
            let infos = []
            results.forEach((item, index) => {
                infos.push({
                    key:'key' + index,
                    time: getMyDate(new Date().getTime(),"yyyy-MM-dd"),
                    code: item['教师工号'],
                    name: item['教师姓名'],
                    major: item['负责方向'],
                    experient: item["教学经验"],
                    description: item['教师简介'],
                })

            })
            this.setState({
                newData: infos,
                uploadLoading: false,
                tableLoading: false,
                showRemoveFile: true
            })
        }
    }


* 3.3百度地图，定位也是一个重要的功能插件，这里也在模板中集成了

![图](https://user-gold-cdn.xitu.io/2018/12/25/167e3b2bb1ad1aaa?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)


以上内容就是对aibb这个react后台模板的简单介绍，比较感兴趣的开发这可以上github[链接](https://github.com/zrxisme/react-web)上clone到本地进行开发，如果可以pr那就再好不过了，如果在开发过程中遇到问题，可以给我提issue，我一定会在第一时间解决。

`感觉您的耐性读完，谢谢！`



## 下载使用
* git clone 地址
* cnpm install
* npm star

## gif图展示
![Image text](https://media.kaolaplay.com/aibb_show.gif)


### 如果遇到问题请联系我,欢迎pr哦，让我们一起加油！

qq邮箱：1204718708@qq.com

