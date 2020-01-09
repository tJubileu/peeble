function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}
var SI_SYMBOL = ["", "K", "Mi", "Bi", "T", "Quad", "Qui"];

function abN(number){

    // what tier? (determines SI symbol)
    var tier = Math.log10(number) / 3 | 0;

    // if zero, we don't need a suffix
    if(tier == 0) return number;

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
}
const { RichEmbed } = require("discord.js")
const db = require("quick.db")
module.exports.run = async (client, message, args, utils) => {
    const user = message.mentions.users.first() || client.users.get(args[0]) || message.author
    if (db.get(`${user.id}.xp`) == null) db.set(`${user.id}.xp`, 0)
    if (db.get(`${user.id}.level`) == null) db.set(`${user.id}.level`, 0)
    if (db.get(`${user.id}.dinheiro`) == null) db.set(`${user.id}.dinheiro`, 0)
    if (db.get(`${user.id}.inteligencia`) == null) db.set(`${user.id}.inteligencia`, 1)
    const emb = new RichEmbed()
        .setTitle(`Perfil de ${user.username}`, user.avatarURL)
        .setThumbnail(user.avatarURL)
        .addField(`💶 Reals`, '`' + db.get(`${user.id}.dinheiro`).toLocaleString('pt-BR') + "`")
        .addField(`📖 Inteligência`, '`' +db.get(`${user.id}.inteligencia`) + '`', true)
        .setTimestamp()
        .setFooter("Comando usado por: " + message.author.username + "#" + message.author.discriminator, message.author.avatarURL);
    message.channel.send(emb)
   
}
module.exports.help = {
    aliases: ['perfil'],
    name: 'profile',
    description: 'Mostra o profile de um membro.',
    usage: '+profile @membro'
}
// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Informativo', /* You can make a category help command with this. */
    exclusiveTo: ''
}