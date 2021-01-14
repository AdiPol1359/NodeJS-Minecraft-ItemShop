module.exports.validateDescription = (description, service, nickname, code, serviceID) => {
    description = description.replace("{title}", service.name);
    description = description.replace("{nickname}", nickname);
    description = description.replace("{code}", code);
    description = description.replace("{number}", service.smsNumber);
    description = description.replace("{service_id}", serviceID);

    return description;
};