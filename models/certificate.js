const fs = require('fs');
const certificateConfig = require('../configs/certificate.json');

class Certificate {
    static fetch() {
        return {
            key: fs.readFileSync(certificateConfig.privateKey, 'utf-8'),
            cert: fs.readFileSync(certificateConfig.certificate, 'utf-8'),
            ca: fs.readFileSync(certificateConfig.chain, 'utf-8')
        };
    }
}


module.exports = Certificate;