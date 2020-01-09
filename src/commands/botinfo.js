const db = require("quick.db")
const { RichEmbed } = require("discord.js")
const ms = require("parse-ms")
let curiosidades = [
    "Sabia que nem sempre eu me chamei Peeble?\nAntigamente, meu nome era Lixeira Robótica. Até que meu dono resolveu trocar!",
    "Meu primeiro comando foi +gamer... Sim, bem aleatório",
    "A inspiração para criar o YouTube foi o jogo YouTubers Life!\n\nCuriosidade Extra: No ínicio, o YouTube era tão desbalanceado que tinha gente com mais de 999 trilhões de inscritos!",
    "A inspiração para criar as empresas foi o jogo Game Dev Tycoon!",
    "Comecei sendo um bot exclusivo de um único servidor, até que o sistema de YouTube fez tanto sucesso que eu fiquei público!",
]
function RandomArray(arrName) {
    return arrName[Math.floor(Math.random() * arrName.length)]
}
exports.run = async (client, message, args, utils) => {
    let time = ms(Date.now() - db.get("BotInfo_Time"))
    const embed = new RichEmbed()
        .setTitle("⚙️ **Informações sobre mim**")
        .setDescription(`Olá!\nMe chamo ${client.user.username}, e sou um bot criado com o intuito de ser um bot único!\nAbaixo, algumas informações minha:`)
        .addField("❗ **Informações Gerais**", `<:online2:556683591682228224> Estou ligado a \`${time.days} Dias\`, \`${time.hours} horas\`, \`${time.minutes} minutos\` & \`${time.seconds} segundos\`\n\n📊 Estou em \`${client.guilds.size} servidores\`, com \`${client.users.size} membros\`.`, true)
        .addField("🖥️ **Links importantes**", `Você pode me adicionar em algum servidor [clicando aqui](https://discordapp.com/api/oauth2/authorize?client_id=614498625023770659&permissions=8&scope=bot)\n\nPara votar em mim, vote através do [Bots Para Discord](https://botsparadiscord.xyz/bots/614498625023770659)`, true)
        .setColor("GREEN")
        .addField(`<a:eyeshake:663860091702870038> **Curiosidade Aleatória:**`, RandomArray(curiosidades))
    message.channel.send(embed)
}
module.exports.help = {
    aliases: ["bot", "peebleinfo"],
    name: 'botinfo',
    description: 'dsasad',
    usage: '+dsaasd'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Moderação',
    exclusiveTo: ''
}