module.exports.format = val => {
    let gradient = "to right, ";
    let addCounter = 0;

    val.split("|").forEach((item, index) => {
        const add = 100 / (val.split('|').length - 1);

        if(val.split('|').length - 1 === index)
            gradient += `${item} ${addCounter}%`;
        else
            gradient += `${item} ${addCounter}%, `;

        addCounter += add
    });

    return gradient;
}