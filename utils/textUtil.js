module.exports.format = val => {
    const ip = [];

    val.split("{").forEach(item => {
        const style = item.indexOf('}') == -1 ? null : item.slice(0, item.indexOf('}'))
        const value = item.slice(item.indexOf('}') + 1)

        if(value.length === 0) return;

        ip.push({style, value})
    })

    return ip;
}