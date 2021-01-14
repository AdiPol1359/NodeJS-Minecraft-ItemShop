const config = require('../configs/main.json');
const indexConfig = require('../configs/index.json');

exports.get404Error = (req, res) => {
    res.status(404).render('404', {
        config,
        indexConfig
    });
}