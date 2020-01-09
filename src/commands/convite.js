const { RichEmbed } = require("discord.js")
module.exports.run = async (client, message, args, utils) => {
    const emb = new RichEmbed()
        .setColor("GREEN")
        .setThumbnail("https://i.pinimg.com/originals/00/da/4a/00da4ad5acf86d5f802038c527dbf635.png")
        .setFooter("Vote em mim pra eu ficar feliz hehe")
        .setDescription("<a:pepeoi:659282782933221388> Olá!\nCaso você queira votar em mim, entrar no meu servidor de suporte, ou me adicionar em algum servidor, você pode fazer isso acessando [este site aqui](https://botsparadiscord.xyz/bots/614498625023770659)!\n\nVote em mim a cada 7 horas! <:knuckles2:623642629439225877>") 
    message.channel.send(`${message.author}`, emb)

}
module.exports.help = {
    aliases: ["invite", "server", 'suporte', 'votar', 'bpd', 'servidor', 'support', 'vote'],
    name: 'convite',
    description: 'Quer saber qual é meu servidor oficial? Esse comando te dirá!',
    usage: '+convite'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Aleatório', /* You can make a category help command with this. */
    exclusiveTo: ''
}