exports.run = async (client, message, args, utils) => {

    message.channel.send(`Desligando...`)

    client.destroy()
   
}
module.exports.help = {
    aliases: ['desligar', 'desativar'],
    name: 'off',
    description: 'Desliga o bot. (Comando SOMENTE para Donos)',
    usage: '+off'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Moderação',
    exclusiveTo: '518830049949122571'
}