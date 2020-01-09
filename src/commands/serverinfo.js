const { RichEmbed } = require("discord.js")
const Discord = require("discord.js")
var moment = require('moment');
moment.locale('pt-BR');
exports.run = (client, message, args, utils) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    	    const serverinfo = new Discord.RichEmbed();
        if (message.guild === null) {
            message.channel.send('Você não parece estar executando o comando num servidor.');
        } else {
            if (message.guild.iconUrl === null) {
                serverinfo.setAuthor('Informações de ' + message.guild.name, 'https://cdn.discordapp.com/avatars/294881981630644224/fa9e90b10df8173085dd4a84ab67f52f.webp')
            } else {
                serverinfo.setAuthor('Informações de ' + message.guild.name, message.guild.iconURL);
                serverinfo.setThumbnail(message.guild.iconURL);
            }
            serverinfo.addField('📝 Nome do Server', message.guild.name, true);
            serverinfo.addField('⭕ ID do Servidor', '``' + message.guild.id + '``', true)
            serverinfo.addField('🌎 Região do Server', message.guild.region, true);
            serverinfo.addField('👑 Dono do Servidor', message.guild.owner.user.username + '#' + message.guild.owner.user.discriminator);
            serverinfo.addBlankField()
            message.guild.fetchMembers();
            serverinfo.addField('⏲️ Membros', message.guild.memberCount, true);
            serverinfo.addField('🗓️ Data de Criação', '``' + moment(message.guild.createdAt).format('LLL') + '``', true);
            serverinfo.addField('🎓 Cargos', message.guild.roles.size, true);
            serverinfo.addField('💬 Chats', message.guild.channels.size, true)
            membrosOn = ['']
    message.guild.members.forEach(member => {
    if(member.presence.status === 'online' || member.presence.status === 'idle' || member.presence.status === 'dnd' ) {
    membrosOn.push(member.user.username)
    }
    })  
            serverinfo.addField('<:online:650151292362293258> Membros Online', membrosOn.length - 1, true)
            serverinfo.setTimestamp();
            serverinfo.setFooter('Comando usado por: ' + message.author.username, message.author.avatarURL);
            if (message.member.highestRole.color !== undefined) {
                serverinfo.setColor(message.member.highestRole.color);
            }
            message.channel.send(serverinfo);
        }

}
module.exports.help = {
    aliases: ['serverinf'],
    name: 'serverinfo',
    description: 'Informações sobre um servidor.',
    usage: '+serverinfo'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Informação',
    exclusiveTo: ''
}