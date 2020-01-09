exports.run = (client, message, args, utils) => {
    const user = message.mentions.users.first() || client.users.get(args[0])
    const member = guild.member(user)
    const reason = args.slice(1).join(" ")
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`${message.author} ➤ Você precisa da permissão "Expulsar membros".`)
    }
    if (message.member.highestRole.calculatedPosition <= member.highestRole.calculatedPosition) return message.channel.send(message.author + " ➤ Você não pode banir alguém com um cargo maior que o seu!")
    if (!user) {
        message.channel.send(`${message.author} ➤ Você precisa mencionar ou dizer o ID de quem você quer expulsar!`)
        return
    }
    if (!reason && user) {
        if (!message.guild.member(user).kickable) return message.channel.send(`${message.author} ➤ Infelizmente, parece que não tenho permissão para usar este comando!`);
        message.guild.member(user).kick()
        message.channel.send(`${user.tag} Foi expulso por ${message.author}\n Motivo: \`Nenhum\``)
    }
    if (user && reason) {
        if (!message.guild.member(user).kickable) return message.channel.send(`${message.author} ➤ Infelizmente, parece que não tenho permissão para usar este comando!`);
        message.guild.member(user).kick()
        message.channel.send(`${user.tag} Foi expulso por ${message.author}\n Motivo: \`${reason}\``)
    }

}
module.exports.help = {
    aliases: ['kick', 'expulsar'],
    name: 'kick',
    description: 'Expulsa um membro do servidor.',
    usage: '+kick @membro <motivo>'
}

// Configuration

module.exports.config = {
    args: true, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Moderação',
    exclusiveTo: ''
}