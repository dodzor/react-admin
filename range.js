module.exports = (req, resp, next) => {
    resp.header('Content-Range', 'posts 0-20/20')
    next()
}