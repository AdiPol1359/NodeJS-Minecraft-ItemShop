const pageConfig = require('../configs/page.json');

exports.moveToHTTPS = (req, res, next) => {
    if(pageConfig.enableHTTPS) {
        if(req.secure)
            next();
        else
            res.redirect(`https://${req.headers.host}${req.url}`)
    }
    else
        next();
}