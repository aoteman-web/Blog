const path = require('path')
const appDate = require('./data.json')
const articles = appDate.articles
const blogcontent = appDate.articles[0]
const pageSize = 4
const latestBlog = appDate.latestBlog
const sort = appDate.sort
const tag = appDate.tag
const filing = appDate.filing
const interlink = appDate.interlink

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 通过api 获取mock数据
    devServer: {
        before(app) {
            app.get('/api/articles', function (req, res) {
                const page = req.query.page || 1
                let array=[]
                for(let i=(page-1)*4;i<page*4;i++){
                    if(articles[i]) {
                        array.push(articles[i])
                    }
                }
                res.json({
                    errno: 0,
                    data: {
                        list: array,
                        total: articles.length,
                        page_size: pageSize
                    }
                })
            }),
            app.get('/api/blogcontent', function (req, res) {
                const id = req.query.id
                res.json({
                    errno: 0,
                    data: blogcontent
                })
            })
            app.get('/api/latestBlog', function (req, res) {
                const id = req.query.id
                res.json({
                    errno: 0,
                    data: latestBlog
                })
            })
            app.get('/api/sort', function (req, res) {
                const id = req.query.id
                res.json({
                    errno: 0,
                    data: sort
                })
            })
            app.get('/api/tag', function (req, res) {
                const id = req.query.id
                res.json({
                    errno: 0,
                    data: tag
                })
            })
            app.get('/api/filing', function (req, res) {
                const id = req.query.id
                res.json({
                    errno: 0,
                    data: filing
                })
            })
            app.get('/api/interlink', function (req, res) {
                const id = req.query.id
                res.json({
                    errno: 0,
                    data: interlink
                })
            })
        }
    },
    chainWebpack(config) {
        config.resolve.alias
            .set('components', resolve('src/components'))
            .set('common', resolve('src/common'))
            .set('api',resolve('src/api'))
    }
}
