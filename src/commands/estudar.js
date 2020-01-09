const { RichEmbed } = require("discord.js")
const db = require("quick.db")
const ms = require("parse-ms")
exports.run = async (client, message, args, utils) => {
    const user = message.author
    let cooldown = (900000 * 2)
    let lastDaily = await db.fetch(`LastStudy_${user.id}`)
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily) )
        return message.channel.send(`${message.author} ➤ Você já estudou recentemente! ⏳\n**Tente de novo em:** \`${timeObj.minutes} minutos e ${timeObj.seconds} segundos\`!`)

    } else {
        if (db.get(`${message.author.id}.inteligencia`) == null) db.set(`${message.author.id}.inteligencia`, 1)
        if (db.get(`${message.author.id}.itens`) == null) return message.channel.send(`${message.author} ➤Você não pode estudar sem livros! Compre alguns na loja.`)
        if (!db.get(`${message.author.id}.itens`).includes("Livros")) return message.channel.send(`${message.author} ➤ Você não pode estudar sem livros! Compre alguns na loja.`)
        db.set(`LastStudy_${user.id}`, Date.now())
        db.add(`${message.author.id}.inteligencia`, 1)
        message.channel.send(`${message.author} ➤ Você estudou e agora possui \`${db.get(`${message.author.id}.inteligencia`)}\` de inteligência! 📖`)
    }
}
module.exports.help = {
    aliases: ['study'],
    name: 'estudar',
    description: 'Quer ver a foto de um membro (ou a sua)? Use este comando!',
    usage: '+avatar @membro'
}

// Configuration

module.exports.config = {
    args: true, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Diversão',
    exclusiveTo: ''
}