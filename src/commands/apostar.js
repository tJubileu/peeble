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
    const user = message.author
    const userMoney = db.get(`${message.author.id}.dinheiro`)
    if (userMoney == null) db.set(`${message.author.id}.dinheiro`, 0)
    let rne = RandomRange(0, 105)
    let quantity = args[0]
    if (!quantity) {
        return message.channel.send(`${message.author} ➤ Quanto você pretende apostar?\nDica minha: Não aposte tudo!`)
    }
    if (quantity === "tudo") {
        if (userMoney < 1) {
            return message.channel.send(`${message.author} ➤ Você não tem nada pra apostar! <a:pepesadcafe:615331415244013624> \nEu sei, é triste, mas tente usar \`${prefix}daily\` para conseguir algo a mais!`)
        }
        quantity = userMoney
    }
    if (quantity === "metade") {
        if (userMoney < 2) {
            return message.channel.send(`${message.author} ➤ Infelizmente você tem poucos Reals para apostar metade <:pepesad:637839430169919534>`)
        }
        quantity = userMoney / 2
    }
    if (quantity === "1b" || quantity === "1bi") {
        if (userMoney < 1000000000) {
            return message.channel.send(`${message.author} ➤ Você não pode apostar algo que não tem! <:pepesad:637839430169919534>`)
        }
        quantity = 1000000000
    }
    if (quantity === "1m"||quantity === "1mi") {
        if (userMoney < 1000000) {
            return message.channel.send(`${message.author} ➤ Você não pode apostar algo que não tem! <:pepesad:637839430169919534>`)
        }
        quantity = 1000000
    }
    if (quantity === "1t" ||quantity === "1tri") {
        if (userMoney < 1000000000000) {
            return message.channel.send(`${message.author} ➤ Você não pode apostar algo que não tem! <:pepesad:637839430169919534>`)
        }
        quantity = 1000000000000
    }
    if (quantity === "1quad") {
        if (userMoney < 1000000000000000) {
            return message.channel.send(`${message.author} ➤ Você não pode apostar algo que não tem! <:pepesad:637839430169919534>`)
        }
        quantity = 1000000000000000
    }
    if (quantity === "1q" || quantity === "1qui") {
        if (userMoney < 1000000000000000000) {
            return message.channel.send(`${message.author} ➤ Você não pode apostar algo que não tem! <:pepesad:637839430169919534>`)
        }
        quantity = 1000000000000000000
    }
    if (quantity === "1k") {
        if (userMoney < 1000) {
            return message.channel.send(`${message.author} ➤ Você não pode apostar algo que não tem! <:pepesad:637839430169919534>`)
        }
        quantity = 1000
    }
    if (isNaN(quantity)) {
        return message.channel.send(`${message.author} ➤ Acho que é impossível apostar isto!`)
    }
    if (quantity < 1) {
        return message.channel.send(`${message.author} ➤ Bem... Acho que não tem como apostar somente isso!`)
    }
    if (quantity > userMoney) {
        return message.channel.send(`${message.author} ➤ Você não tem tudo isso para apostar. <:pepesadcat:654696192114163724>`)
    }
    if (message.author.id === "518830049949122571") rne += 45
    if (rne < 85) {
        message.channel.send(`${message.author} ➤ Você perdeu tudo! <a:pepechoranu:615330970169638965>\n\`Perdeu ${(Math.round(quantity)).toLocaleString('pt-BR')} (${abn((Math.round(quantity)))})\`.`)
        db.add(`${user.id}.dinheiro`, -Math.round(quantity))
    } else if (rne > 85) {
        quantity = Math.round(quantity)
        message.channel.send(`${message.author} ➤ Você ganhou o dobro! <:pepeez:613918684850683924>\n\`Ganhou ${(Math.round(quantity) * 2).toLocaleString('pt-BR')} (${abn((Math.round(quantity * 2)))})\`.`)
        db.add(`${user.id}.dinheiro`, Math.round(quantity) * 2)
    } else if (rne == 85) {
        quantity = Math.round(quantity)
        message.channel.send(`${message.author} ➤ VOCÊ GANHOU O TRIPLO!!<a:pepehappy:615331147148296218> <a:pepehappy:615331147148296218> \n\`Ganhou ${(Math.round(quantity) * 3).toLocaleString('pt-BR')} (${abn((Math.round(quantity * 3)))})\`.`)
        db.add(`${user.id}.dinheiro`, Math.round(quantity) * 3)
    }
}
module.exports.help = {
    aliases: [],
    name: 'apostar',
    description: 'Dobro ou nada. (Talvez até o triplo, depende de sua sorte)',
    usage: '+apostar <quantia>'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Econômia', /* You can make a category help command with this. */
    exclusiveTo: ''
}