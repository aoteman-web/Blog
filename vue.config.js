const path = require('path')
const appDate = require('./data.json')
const articles = appDate.articles

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 通过api mock数据
    devServer: {
        before(app) {
            app.get('/api/articles', function (req, res) {
                // const id = req.query.id
                res.json({
                    errno: 0,
                    data: articles
                })
            })
        }
    },
    chainWebpack(config) {
        config.resolve.alias
            .set('components', resolve('src/components'))
            .set('common', resolve('src/common'))
    }
}
