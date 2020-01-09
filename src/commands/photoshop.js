function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
let cmds = [
    "invert",
    "revert",
    "rotate",
    "rodar",
    "grayscale",
    "cinza",
    "scale",
    "redimensionar",
    "help",
    "ajuda",
]
const { RichEmbed } = require("discord.js")
const jimp = require("jimp")
const db = require("quick.db")
exports.run = (client, message, args, utils) => {
    const prefix = db.get(`${message.guild.id}.prefix`)
    if (args[0] === "invert" || args[0] === "revert") {
        const ping = message.mentions.users.first() || client.users.get(args[1]) || message.author
        if (message.attachments.first()) {
            jimp.read(message.attachments.first().url).then(image => {
                image.invert().write("image.png")
                message.channel.send('', {files: ["image.png"]} )
            })
        } else if (!message.attachments.first()){
            jimp.read(ping.displayAvatarURL).then(image => {
                image.invert().write("image.png")
                message.channel.send('', {files: ["image.png"]} )
            })
        }
    }
    if (args[0] === "rotate" || args[0] === "rodar") {
        const ping = message.mentions.users.first() || client.users.get(args[1]) || message.author
        if (ping == null && args[1]) return (`❌ ➤ ${message.author} Usuário inválido!`)
        if (!message.attachments.first() && !ping) return (`❌ ➤ ${message.author} Não encontrei nenhuma menção ou imagem válida na sua mensagem!`)
        if (message.attachments.first()) {
            jimp.read(message.attachments.first().url).then(image => {
                image.rotate(RandomRange(0, 360)).write("image.png")
                message.channel.send('', {files: ["image.png"]} )
            })
        } else if (!message.attachments.first()){
            jimp.read(ping.displayAvatarURL).then(image => {
                image.rotate(RandomRange(0, 360)).write("image.png")
                message.channel.send('', {files: ["image.png"]} )
            })
        }
    }
    if (args[0] === 'cinza' || args[0] == "grayscale") {
        const ping = message.mentions.users.first() || client.users.get(args[1]) || message.author
        if (message.attachments.first()) {
            jimp.read(message.attachments.first().url).then(image => {
                image.grayscale().write("imageg.png")
                message.channel.send('', {files: ["imageg.png"]} )
            })
        } else if (!message.attachments.first()){
            jimp.read(ping.displayAvatarURL).then(image => {
                image.grayscale().write("imageg.png")
                message.channel.send('', {files: ["imageg.png"]} )
            })
        }
    }
    if (args[0] === 'help' || args[0] === 'ajuda') {
        const emb1 = new RichEmbed()
          .setTitle("Lista de Comandos de Photoshop")
          .setColor(0x0075ff)
          .setThumbnail("http://icons.iconarchive.com/icons/papirus-team/papirus-status/512/dialog-information-icon.png")
          .addField("📷 ➤➤ Manipulação de Imagens", `\`${prefix}ps grayscale\`, \`${prefix}ps rotate\`,\`${prefix}ps invert\``)
          .setFooter("Mais comandos sendo adicionados de tempos em tempos!")
          .setTimestamp()
        message.channel.send(emb1)
    }
    if (!args[0] || !cmds.includes(args[0])) return message.channel.send(`❌ ➤ ${message.author} Modo inválido de utilizar esse comando! Caso não saiba os comandos de photoshop, use \`${prefix}ps help\``)
}
module.exports.help = {
    aliases: ['ps'],
    name: 'photoshop',
    description: 'Tá se sentindo sortudo? Verifique sua sorte!',
    usage: '+sorte'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Diversão', /* You can make a category help command with this. */
    exclusiveTo: ''
}