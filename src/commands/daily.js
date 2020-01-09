function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
    
}
const db = require("quick.db")
const ms = require("parse-ms")
module.exports.run = async (client, message, args, utils) => {
    let cooldown = (8.64e+7 / 2)
    const user = message.author
    let lastDaily = await db.fetch(`LastDailya_${user.id}`)
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily) )
        message.channel.send(`${message.author} ➤ Você já pegou seu daily hoje! ⏳ \n**Tente de novo em:** \`${timeObj.hours} hora(s), ${timeObj.minutes} minuto(s) e ${timeObj.seconds} segundo(s)\`! `)
    } else {
        db.set(`LastDailya_${user.id}`, Date.now())
        const moneyToEarn = RandomRange(4000, 8000)
        db.add(`${user.id}.dinheiro`, moneyToEarn)
        message.channel.send(`${message.author} ➤ Você pegou seus Reals diários! <:pepeez:613918684850683924> \nVocê ganhou \`${moneyToEarn.toLocaleString('pt-BR')} Reals\`\n**Lembrando:** Volte todo dia para pegar seu daily!`)
    }   
   
}
module.exports.help = {
    aliases: ['diario', 'diário'],
    name: 'daily',
    description: 'Pega seu dinheiro diário',
    usage: '+daily'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Econômia', /* You can make a category help command with this. */
    exclusiveTo: ''
}