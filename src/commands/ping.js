exports.run = async (client, message, args, utils) => {
    const m = await message.channel.send("Ping sendo calculado!")
    m.edit(`> 🏓 **Pong!**\n**➤Latência:** \`${m.createdTimestamp - message.createdTimestamp}ms\`\n**➤Latência de API:** \`${Math.round(client.ping)}ms\``)

}
module.exports.help = {
    aliases: [],
    name: 'ping',
    description: 'Mostra o ping do bot.',
    usage: '+ping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Informativo',
    exclusiveTo: ''
}