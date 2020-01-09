const timestamp = require('time-stamp')
const ms = require("parse-ms")
exports.run = (client, message, args, utils) => {
    const br = ms(Date.now())
    message.channel.send(`> 🕜 ➤ O horário de Brasília atual é: **${br.hours - 3}:${br.minutes}:${br.seconds}** 🇧🇷\n> ‎‎‎\n> 🕜 ➤ O horário de Lisboa atual é: **${br.hours}:${br.minutes}:${br.seconds}** 🇵🇹`)
}


module.exports.help = {
    aliases: ['horário'],
    name: 'hora',
    description: 'Comando informativo que mostra o horário de Brasília e o de Lisboa.',
    usage: '+hora'
}//🇵🇹

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Informativo',
    exclusiveTo: ''
}