const fetch = require('node-fetch');

module.exports.checkSMS = (id, code, number, desc, cb) => {
    fetch(`https://lvlup.pro/api/checksms?id=${id}&code=${code}&number=${number}&desc=${desc}`)
    .then(res => res.json())
    .then(data => {
        if(data.valid == 1)
            cb(true);
        else
            cb(false);
    });
}