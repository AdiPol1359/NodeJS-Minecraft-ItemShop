const servicesJSON = require('../data/services.json');

class ServiceModel {
    static fetchAll(cb) {
        return servicesJSON;
    }

    static findById(id) {
        return servicesJSON.find(i => i.serviceID == id);
    }
}


module.exports = ServiceModel;