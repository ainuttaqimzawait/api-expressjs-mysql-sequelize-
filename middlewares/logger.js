const log = (req, res, next) => {
    console.log(new Date().toLocaleDateString(), '=>', req.originalUrl);
    next();
}
module.exports = log;