function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
    
}
const db = require("quick.db")
const { RichEmbed } = require("discord.js")
module.exports.run = async (client, message, args, utils) => {
    let prefix = db.get(`${message.guild.id}.prefix`)
    const userItens = db.get(`${message.author.id}.itens`)
    if (!args[0]) {
        return message.channel.send(`${message.author} ➤ Você precisa dizer qual loja você quer acessar!\n*Se não souber como usa as lojas, use \`+loja lista\`*`)
    }
    if (args[0] == 'lista' || args[0] == 'list') {
        return message.channel.send(`> ${message.author} **Todas as lojas:**\n+loja 1 - *Página um da loja*\n+loja 2 - *Página dois da loja*`)
    }
    const Shop1 = new RichEmbed()
        .setAuthor(`${prefix}comprar [número]`)
        .setTitle("💶 Loja! (Página um)")
        .setDescription("Loja de itens!")
        .setColor("RANDOM")
        .setThumbnail("https://myrealdomain.com/images/cart-clipart-3.png")
        .addField("📱 Celular iLixo X [1]", "**8.000 Reals**\n*Incrível celular que é pior que o anterior, mas mais caro! Permite postar vídeos mais rápido.*\n")
        .addField("🖥️  iLixeira [2]", "**25.000 Reals**\n*Computador da Mango inc. que permite você postar vídeos no YouTube!*")
        .addField("🚗  Carro velho [3]", "**400.000 Reals**\n*Carro que te possibilita trabalhar mais rápido e, consequentemente, ganhar mais!*") 
        .addField("🏭  Empresa [4]", "**1.000.000 Reals**\n*Quem nunca quis virar um Desenvolvedor de Jogos? Agora seu sonho pode se realizar!*")
        .setTimestamp()
        .setFooter("Comando usado por: " + message.author.tag, message.author.avatarURL)

    const Shop2 = new RichEmbed()
        .setAuthor(`${prefix}comprar [número]`)
        .setTitle("💶 Loja! (Página dois)")
        .setDescription("Loja de itens!")
        .setColor("RANDOM")
        .setThumbnail("https://myrealdomain.com/images/cart-clipart-3.png")
        .addField("📚  Livros [5]", "**5.000 Reals**\n*Não consegue nenhum emprego por falta de inteligência? Estude!*") 
        .addField("⚙️ Game Engine Profissional [6]", "**120.000**\n*Seus jogos estão recebendo péssimas notas? Aprimore eles!*")
        //.addField("🏙️ Cidade [7]", "**20 Bilhões de Reals**\n*Virar dono(a) de uma cidade inteira nunca foi tão fácil!*\n")
        .setTimestamp()
        .setFooter("Comando usado por: " + message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
    
    const ShopBlack = new RichEmbed()
        .setAuthor(`+comprar [número]`)
        .setTitle("💶 Loja ilegal!")
        .setDescription("Mercado negro")
        .setThumbnail("https://cdn1.iconfinder.com/data/icons/human-anatomy-2-line/128/skull_skeleton_bone_danger_skeleton_poison_halloween_warning_scary-512.png")
        .addField("🔫 Arminha de água [-1]", "**5.000 Reals**\n*Arminha de água camuflada de arma real! Ótima para assaltos.*\n")
        .setTimestamp()
        .setFooter("Comando usado por: " + message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
    
    if (args[0] == '1' || args[0] == 'um') {
        message.channel.send(Shop1)
    } else if (args[0] == '2' || args[0] == 'dois'){
        message.channel.send(Shop2)
    }

   
}
module.exports.help = {
    aliases: ['shop'],
    name: 'loja',
    description: 'Loja de reals!',
    usage: '+loja'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Econômia', /* You can make a category help command with this. */
    exclusiveTo: ''
}