const config = require('../configs/main.json');
const indexConfig = require('../configs/index.json');
const lvlupConfig = require('../configs/lvlup.json');
const rules = require('../configs/rules.json');
const rconConfig = require('../configs/rcon.json');

const ServiceModel = require('../models/service')

const lvlupAPI = require('../api/lvlupAPI');

const colors = require('colors');

const gradientUtil = require('../utils/gradientUtil');
const textUtil = require('../utils/textUtil');
const utils = require('../utils/utils');

const Rcon = require('modern-rcon');
const rcon = new Rcon(rconConfig.host, rconConfig.port, rconConfig.password, rconConfig.timeout);

exports.getIndex = (req, res) => {
    res.render('index', {
        path: '/',
        config,
        indexConfig,
        ip: textUtil.format(indexConfig.titleContainer.title.text),
        description: textUtil.format(indexConfig.titleContainer.description.text),
        gradient: gradientUtil.format(indexConfig.titleContainer.button.gradient),
        services: ServiceModel.fetchAll()
    });
}

exports.getRules = (req, res) => {
    res.render('rules', {
        path: '/regulamin',
        config,
        indexConfig,
        rules
    });
}

exports.postPayment = (req, res) => {
    const { nickname, code, serviceID } = req.body;
    const service = ServiceModel.findById(serviceID);

    if(!service) {
        res.render('result', {
            config,
            indexConfig,
            error: true,
            description: "Wystąpił problem podczas realizacji żądania, prosimy spróbować ponownie później!"
        });
        return;
    }

    lvlupAPI.checkSMS(lvlupConfig.clientID, code, service.smsNumber, utils.validateDescription(service.lvlupDescription, service, nickname, code, serviceID), status => {
        if(status) {
            rcon.connect().then(() => {
                service.rconCommands.forEach(command => {
                    command = command.replace('{nick}', nickname);
                    rcon.send(command);
                });
            })
            .then(() => rcon.disconnect())
            .catch(() => console.log("BŁĄD!".red.bold, "Nie udało się połączyć z RCON'em!".yellow))

            res.render('result', {
                config,
                indexConfig,
                error: false
            });
        }
        else {
            res.render('result', {
                config,
                indexConfig,
                error: true,
                description: "Podano zły kod SMS!"
            });
        }
    });
};