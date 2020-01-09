exports.run = async (client, message, args, utils) => {
    const n = args[0]
    const txt = args[1]
    if (!n) return message.channel.send(`❌ ${message.author} ➤ Você precisa dizer um número.`)
    if (isNaN(n) || n < 0 || n > 9999999999999999999999999999999999) return message.channel.send(`❌ ${message.author} ➤ Você precisa dizer um número maior que 0.`)
    if (!txt) return message.channel.send(`❌ ${message.author} ➤ Você precisa dizer algo para pagar.`)
    message.channel.send(`${n} ${txt} Pago(s).`)
   
}
module.exports.help = {
    aliases: [],
    name: 'pagar',
    description: 'Desliga o bot. (Comando SOMENTE para Donos)',
    usage: '+off'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Moderação',
    exclusiveTo: ''
}