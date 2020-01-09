const db = require("quick.db")
const ms = require("parse-ms")
function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
    
}
var SI_SYMBOL = ["", "K", "Mi", "Bi", "T", "Quad", "Qui"];

function abn(number){

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
module.exports.run = async (client, message, args, utils) => {
    let prefix = db.get(`${message.guild.id}.prefix`)
    const user = message.author
    const userMoney = db.get(`${message.author.id}.dinheiro`)
    if (userMoney == null) db.set(`${message.author.id}.dinheiro`, 0)
    let item = args[0]
    if (db.get(`${user.id}.itens`) == null) db.set(`${user.id}.itens`, [])
    if (!item) return message.channel.send(`${message.author} ➤ Você precisa dizer qual item você quer comprar! \nExemplo: \`+comprar ${RandomRange(1, 3)}\``)
    
    if (item == "1") {
        if (db.get(`${user.id}.itens`).includes(`iLixo`)) return message.channel.send(`${message.author} ➤  Você já tem este item!`)
        if (userMoney < 65000) return message.channel.send(`${message.author} ➤  Você não tem dinheiro suficiente!`)
        db.push(`${user.id}.itens`, "iLixo")
        db.add(`${user.id}.dinheiro`, -65000)
        return message.channel.send(`${message.author} ➤  Você comprou um \`Celular iLixo X\` com sucesso!`)
    }
    
    if (item == "2") {
        if (db.get(`${user.id}.itens`).includes(`iLixeira`)) return message.channel.send(`${message.author} ➤  Você já tem este item!`)
        if (userMoney < 25000) return message.channel.send(`${message.author} ➤ Você não tem dinheiro suficiente!`)
        db.push(`${user.id}.itens`, "iLixeira")
        db.add(`${user.id}.dinheiro`, -25000)
        return message.channel.send(`${message.author} ➤ Você comprou uma \`iLixeira\` com sucesso!`)
    }

    if (item == "3") {
        if (db.get(`${user.id}.itens`).includes(`Carro velho`)) return message.channel.send(`${message.author} ➤ Você já tem este item!`)
        if (userMoney < 300000) return message.channel.send(`${message.author} ➤ Você não tem dinheiro suficiente!`)
        db.push(`${user.id}.itens`, "Carro velho")
        db.add(`${user.id}.dinheiro`, -300000)
        return message.channel.send(`${message.author} ➤ Você comprou um \`Carro velho\` com sucesso!`)
    }

    if (item == "4") {
        if (db.get(`${user.id}.itens`).includes(`Empresa`)) return message.channel.send(`${message.author} ➤ Você já tem este item!`)
        if (userMoney < 500000) return message.channel.send(`${message.author} ➤ Você não tem dinheiro suficiente!`)
        db.push(`${user.id}.itens`, "Empresa")
        db.add(`${user.id}.dinheiro`, -500000)
        return message.channel.send(`${message.author} ➤ Você comprou uma \`Empresa\` com sucesso!`)
    }
    if (item == "5") {
        if (db.get(`${user.id}.itens`).includes(`Livros`)) return message.channel.send(`${message.author} ➤ Você já tem este item!`)
        if (userMoney < 5000) return message.channel.send(`${message.author} ➤ Você não tem dinheiro suficiente!`)
        db.push(`${user.id}.itens`, "Livros")
        db.add(`${user.id}.dinheiro`, -5000)
        db.set(`${user.id}.inteligencia`, 1)
        return message.channel.send(`${message.author} ➤ Você comprou \`Livros\` com sucesso!`)
        
    } // Game Engine Profissional
    if (item == "6") {
        if (db.get(`${user.id}.itens`).includes(`Game Engine Profissional`)) return message.channel.send(`${message.author} ➤ Você já tem este item!`)
        if (userMoney < 120000) return message.channel.send(`${message.author} ➤ Você não tem dinheiro suficiente!`)
        db.push(`${user.id}.itens`, "Game Engine Profissional")
        db.add(`${user.id}.dinheiro`, -120000)
        return message.channel.send(`${message.author} ➤ Você comprou uma \`Game Engine Profissional\` com sucesso!`)
    }
    return message.channel.send(`${message.author} ➤ Este número \`(${item})\` não está na catálogo da loja! Caso queira ver os itens, use ${prefix}loja!`)
}
module.exports.help = {
    aliases: ['buy'],
    name: 'comprar',
    description: 'Comprar itens da loja.',
    usage: '+comprar <n°_do_item>'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Econômia', /* You can make a category help command with this. */
    exclusiveTo: ''
}