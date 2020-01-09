const db = require("quick.db")
const { RichEmbed } = require("discord.js")
const ms = require("parse-ms")
const ids = [
    "518830049949122571",
    "556480900913954836",
    "288367528646803466"
]
module.exports.run = async (client, message, args, utils) => {
    const prefix = db.get(`${message.guild.id}.prefix`)
    if (!ids.includes(message.author.id)) return message.channel.send(`❌ ➤ ${message.author} Comando restrito para Moderadores da Lixeira Robótica!`)
    const user = message.mentions.users.first() || client.users.get(args[0]) 
    let cooldown
    let timeNum = args[1]
    let type = args[2]
    if (isNaN(timeNum)) return message.channel.send(`❌ ➤ ${message.author} Tempo inválido.`)
    if (type == "s" || type == "sec" || type == "segundos") timeNum*=1000
    else if (type == "m" || type == "min" || type == "minutos" || type == "minuto") timeNum*=60000
    else if (type == "h" || type == "hora" || type == "horas") timeNum*=6000000
    else if (type == "d" || type == "dia" || type == "dias") timeNum*=144000000
    else return message.channel.send(`❌ ➤ ${message.author} Forma errada de utilizar este comando.\n Exemplo de como usar: \`${prefix}+tempbotban 5 minutos\``)

    if (timeNum < 10000) return message.channel.send(`❌ ➤ ${message.author} Tempo baixo demais.`)

    if (!args[0] || !user || user == null) return message.channel.send(`❌ ➤ ${message.author} Você precisa dizer quem você quer banir de me utilizar.`)
    
    if (user.id === "518830049949122571") return message.channel.send(`❌ ➤ ${message.author} Você não pode banir meu dono!`)
    const punishz = new RichEmbed()
        .setTitle("💀 Punição")
        .setAuthor(message.author.tag, message.author.avatarURL)
        .addField(`Usuário Punido`, user.tag, true)
        .addField(`Punição`, `\`Temp Bot-ban\``)
        .addField(`Punido no Servidor`, `\`${message.guild.name}\` (${message.guild.id})`, true)
        .addField(`Tempo`, `\`${ms(timeNum).days} Dias, ${ms(timeNum).hours} horas, ${ms(timeNum).minutes} minutos e ${ms(timeNum).seconds} segundos.\``)
        .setTimestamp()

    const bban = db.get(`${user.id}.ban`)
    if (bban == null) db.set(`${user.id}.ban`, 0)
    if (bban == 1) return message.channel.send(`❌ ➤ ${message.author} Este usuário já está bot-banido!`)
    if (!bban == 1) {
        db.set(`${user.id}.ban`, 1)
        setTimeout(function() {
            db.set(`${user.id}.ban`, 0)   
        }, timeNum)
        client.channels.get("660646564439785485").send(punishz)
        return message.channel.send(`<:correct:659543887416786956> ➤ ${message.author} Este usuário foi bot-banido! (\`${user.username}\`)\nBanido por \`${ms(timeNum).days} Dias, ${ms(timeNum).hours} horas, ${ms(timeNum).minutes} minutos e ${ms(timeNum).seconds} segundos.\``)
    }
}
module.exports.help = {
    aliases: ['+tbban'],
    name: '+tempbotban',
    description: 'Bane um usuário de usar comandos.',
    usage: '++botban @user'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Moderação', /* You can make a category help command with this. */
    exclusiveTo: ''
}