const Vue = require('vue')
const server = require('express')()
const fs = require('fs')
const path = require('path')
const renderer = require('vue-server-renderer').createRenderer({
    template: fs.readFileSync(path.join(__dirname,'./public/index.template.html'), 'utf-8')
})

server.get('*', (req, res) => {
    //渲染上下文对象 作为 render第二个参数提供给模板插值
    const context = {
        title: 'hello',
        mate: `<meta http-equiv="content-type" content="text/html;charset=utf-8">`,
        url:req.url
    }
    //vue 的新实例
    const app = require('./app')(context)
    
    //服务端生成页面返回
    renderer.renderToString(app, context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return;
        }
        res.end(html)
    })

})

server.listen(3000)