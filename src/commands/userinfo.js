const Discord = require("discord.js");
const db = require("quick.db")
var moment = require('moment');
moment().format();
moment.locale('pt-BR');
exports.run = (client, message, args, utils) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
        let user = message.mentions.users.first() || client.users.get(args[0]) || message.author 
        const userMoney = db.get(`${user.id}.dinheiro`)
        if (!user) {
            message.channel.send('O usuário mencionado não foi reconhecido pelo bot, ou você não mencionou ninguém.').then(message => {
                setTimeout(() => {message.delete()}, 5000)
            })
        } else {
            const whoIs = new Discord.RichEmbed();
            whoIs.setFooter('Comando usado por: ' + message.author.username, message.author.avatarURL)
            if (user.presence.game !== null) {
                if (user.presence.game.streaming) {
                    whoIs.setDescription('🖥️ Transmitindo **' + user.presence.game.name + '**.');
                } else {
                    whoIs.setDescription('🎮 Jogando **' + user.presence.game.name + '**.\n');
                }
            }
            whoIs.addField('📘 Nome de Usuário', user.username + '#' + user.discriminator, true)
            whoIs.addField('👤 ID', '``' + user.id + "``", true);
            whoIs.setThumbnail(user.avatarURL);
            if (user.presence.status === "idle") {
                whoIs.addField('<:afk:650148584427225098> Status', 'Inativo', true);
            } else if (user.presence.status === "dnd"){
                whoIs.addField('<:dnd:650150925138264065> Status', 'Não Pertube', true);
            } else if (user.presence.status === "online"){
                whoIs.addField('<:online:650151292362293258> Status', 'Online', true);
            } else if (user.presence.status === "offline") {
                whoIs.addField('<:invisible:650151511200104450> Status', 'Offline', true);
            }
            whoIs.addField('⌚ Conta criada em', "``" + moment(user.createdAt).format('LLL') + "``", true);
            if (!user.bot) {
                whoIs.addField('😀 Tipo de conta', 'Humano', true)
            } else {
                whoIs.addField('🤖 Tipo de conta', 'Bot', true)
            }
            whoIs.setTimestamp();
            whoIs.addField('💶 Dinheiro', `\`\`${userMoney.toLocaleString('pt-BR')}\`\` Reals`, true)

            if (message.channel.type === 'dm') {
                message.channel.sendEmbed(whoIs);
            } else if (message.channel.permissionsFor(message.guild.member(client.user)).hasPermission('EMBED_LINKS')) {
            	whoIs.addField('⏰ Entrou no server',  "``"+ moment(message.guild.member(user).joinedAt).format('LLL')+ "``", true);
            	if (message.member.highestRole.color !== undefined) {
                whoIs.setColor(message.member.highestRole.color)
            }
                message.channel.send(whoIs);
            } else {
            	whoIs.addField('⏰ Entrou no server', "``"+moment(message.guild.member(user).joinedAt).format('LLL')+ "``", false);
            	if (message.member.highestRole.color !== undefined) {
                whoIs.setColor(message.member.highestRole.color)
            }
                message.author.send(whoIs);
            }
        }

}
module.exports.help = {
    aliases: [],
    name: 'userinfo',
    description: 'Informações sobre um membro.',
    usage: '+userinfo @membro'
}

// Configuration

module.exports.config = {
    args: true, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Informação',
    exclusiveTo: ''
}