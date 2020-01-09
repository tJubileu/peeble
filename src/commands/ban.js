exports.run = (client, message, args, utils) => {
    const user = message.mentions.users.first() || client.users.get(args[0])
    const member = message.guild.member(user)

    const reason = args.slice(1).join(" ")
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`${message.author} ➤ Você precisa da permissão "Banir membros"!`)
    }
    if (message.member.highestRole.calculatedPosition <= member.highestRole.calculatedPosition) return message.channel.send(message.author + " ➤ Você não pode banir alguém com um cargo maior que o seu!")
    if (!user) {
        message.channel.send(message.author + " ➤ Você precisa mencionar ou dizer o ID de quem você quer banir <:knuckles:618909365528690699>")
        return
    }
    if (!reason && user) {
        if (!message.guild.member(user).bannable) return message.channel.send(`${message.author} ➤ Infelizmente, parece que não tenho permissão para usar este comando!`);
        message.guild.ban(user, `Banido por ${message.author.tag}: Sem motivo`)
        message.channel.send(`**Ban!** ➤ ${user.tag} Foi banido por ${message.author}!\nMotivo do banimento: \`Nenhum\``)
    }
    if (user && reason) {
        if (!message.guild.member(user).bannable) return message.channel.send(`${message.author} ➤ Infelizmente, parece que não tenho permissão para usar este comando!`);
        message.guild.ban(user, `Banido por ${message.author.tag}: "${reason}"`)
        message.channel.send(`**Ban!** ➤ ${user.tag} Foi banido por ${message.author}!\nMotivo do banimento: \`${reason}\``)
    }

}
module.exports.help = {
    aliases: ['ban'],
    name: 'ban',
    description: 'Bane um membro do servidor.',
    usage: '+ban @membro <motivo>'
}

// Configuration

module.exports.config = {
    args: true, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Moderação',
    exclusiveTo: ''
}