import { get } from './helpers'

const getArticles = get('/api/articles')
const getBlogContent = get('/api/blogcontent')
const getLatestBlog = get('/api/latestBlog')
const getSort = get('/api/sort')
const getTag = get('/api/tag')
const getFiling = get('/api/filing')
const getInterlink = get('/api/interlink')

export {
    getArticles,
    getBlogContent,
    getLatestBlog,
    getSort,
    getTag,
    getFiling,
    getInterlink
}
