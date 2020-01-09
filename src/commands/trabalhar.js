function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
    
}
const db = require("quick.db")
const ms = require("parse-ms")
module.exports.run = async (client, message, args, utils) => {
    const userMoney = db.get(`${message.author.id}.dinheiro`)
    const userWork = db.get(`${message.author.id}.trabalho`)
    const prefix = db.get(`${message.guild.id}.prefix`)
    let userItens = db.get(`${message.guild.id}.itens`)
    if (userItens == null) {
        await db.get(`${message.guild.id}.itens`, [])
    }
    const user = message.author
    let toAdd = 0
    let cooldown = 1500000 //25 Minutos
    if (userWork == "Nenhum") {
        return message.channel.send(`❌ ➤ ${message.author} Você não possui nenhum emprego!\n> Pegue um usando: \`${prefix}emprego novo\``)
    }
    if (userWork == "Mendigo") {
        cooldown = 120000/2
        let lastDaily = await db.fetch(`LastWk_${user.id}`)
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily) )
            message.channel.send(`${message.author} ➤ Você já trabalhou recentemente! ⏳ \n**Tente de novo em:** \`${timeObj.hours} hora(s), ${timeObj.minutes} minuto(s) e ${timeObj.seconds} segundo(s)\`! `)
        } else {
            toAdd = RandomRange(15, 120)
            message.channel.send(`💰 ➤ ${message.author} Você mendigou para umas pessoas e ganhou \`${toAdd} Reals\`!`)
            db.add(`${message.author.id}.dinheiro`, toAdd)
            db.set(`LastWk_${user.id}`, Date.now())
        }
    }
    if (userWork == "Vendedor(a) de Fast-Food") {
        cooldown = 480000
        let lastDaily = await db.fetch(`LastWk_${user.id}`)
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily) )
            message.channel.send(`${message.author} ➤ Você já trabalhou recentemente! ⏳ \n**Tente de novo em:** \`${timeObj.hours} hora(s), ${timeObj.minutes} minuto(s) e ${timeObj.seconds} segundo(s)\`! `)
        } else {
            toAdd = RandomRange(800, 1200)
            message.channel.send(`💰 ➤ ${message.author} Você vendeu comida para várias pessoas e conseguiu \`${toAdd.toLocaleString("pt-BR")} Reals\`!`)
            db.add(`${message.author.id}.dinheiro`, toAdd)
            db.set(`LastWk_${user.id}`, Date.now())
        }
    }
    if (userWork == "Lixeiro") {
        cooldown = 720000
        let lastDaily = await db.fetch(`LastWk_${user.id}`)
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily) )
            message.channel.send(`${message.author} ➤ Você já trabalhou recentemente! ⏳ \n**Tente de novo em:** \`${timeObj.hours} hora(s), ${timeObj.minutes} minuto(s) e ${timeObj.seconds} segundo(s)\`! `)
        } else {
            toAdd = RandomRange(1300, 1500)
            message.channel.send(`💰 ➤ ${message.author} Você recolheu lixo e conseguiu \`${toAdd.toLocaleString("pt-BR")} Reals\`!`)
            db.add(`${message.author.id}.dinheiro`, toAdd)
            db.set(`LastWk_${user.id}`, Date.now())
        }
    }
    if (userWork == "Lenhador(a)") {
        cooldown = 840000
        let lastDaily = await db.fetch(`LastWk_${user.id}`)
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily) )
            message.channel.send(`${message.author} ➤ Você já trabalhou recentemente! ⏳ \n**Tente de novo em:** \`${timeObj.hours} hora(s), ${timeObj.minutes} minuto(s) e ${timeObj.seconds} segundo(s)\`! `)
        } else {
            toAdd = RandomRange(1500, 1900)
            message.channel.send(`💰 ➤ ${message.author} Você cortou várias árvores e conseguiu \`${toAdd.toLocaleString("pt-BR")} Reals\`!`)
            db.add(`${message.author.id}.dinheiro`, toAdd)
            db.set(`LastWk_${user.id}`, Date.now())
        }
    }
    if (userWork == "Ladrão") {
        cooldown = 240000
        let azar = RandomRange(0, 100)
        if (azar > 40) {
            db.set(`${user.id}.preso`, 1)
            message.channel.send(`⛔ ➤ ${message.author} Você foi **Preso** por 10 minutos!`)
            return db.set(`PrisonTime_${user.id}`, Date.now())
        }
        let lastDaily = await db.fetch(`LastWk_${user.id}`)
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily) )
            message.channel.send(`${message.author} ➤ Você já "trabalhou" recentemente! ⏳ \n**Tente de novo em:** \`${timeObj.hours} hora(s), ${timeObj.minutes} minuto(s) e ${timeObj.seconds} segundo(s)\`! `)
        } else {
            toAdd = RandomRange(10000, 14000)
            message.channel.send(`💰 ➤ ${message.author} Você roubou umas pessoas e conseguiu \`${toAdd.toLocaleString("pt-BR")} Reals\`!`)
            db.add(`${message.author.id}.dinheiro`, toAdd)
            db.set(`LastWk_${user.id}`, Date.now())
        }
    }
    if (userWork == "Advogado(a)") {
        cooldown = 1.2e+6
        let lastDaily = await db.fetch(`LastWk_${user.id}`)
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily) )
            message.channel.send(`${message.author} ➤ Você já trabalhou recentemente! ⏳ \n**Tente de novo em:** \`${timeObj.hours} hora(s), ${timeObj.minutes} minuto(s) e ${timeObj.seconds} segundo(s)\`! `)
        } else {
            toAdd = RandomRange(5000, 8000)
            message.channel.send(`💰 ➤ ${message.author} Você trabalhou como Advogado e conseguiu \`${toAdd.toLocaleString("pt-BR")} Reals\`!`)
            db.add(`${message.author.id}.dinheiro`, toAdd)
            db.set(`LastWk_${user.id}`, Date.now())
        }
    }
    if (userWork == "Policial") {
        cooldown = 1.8e+6
        let lastDaily = await db.fetch(`LastWk_${user.id}`)
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily) )
            message.channel.send(`${message.author} ➤ Você já trabalhou recentemente! ⏳ \n**Tente de novo em:** \`${timeObj.hours} hora(s), ${timeObj.minutes} minuto(s) e ${timeObj.seconds} segundo(s)\`! `)
        } else {
            toAdd = RandomRange(2000, 25000)
            message.channel.send(`💰 ➤ ${message.author} Você prendeu ladrões e conseguiu \`${toAdd.toLocaleString("pt-BR")} Reals\`!`)
            db.add(`${message.author.id}.dinheiro`, toAdd)
            db.set(`LastWk_${user.id}`, Date.now())
        }
    }
    

}
module.exports.help = {
    aliases: ['work'],
    name: 'trabalhar',
    description: 'Qual o melhor jeito de ganhar dinheiro? Trabalhando, é claro!.',
    usage: '+trabalhar'
}

// Configuration

module.exports.config = {
    args: false,
    restricted: false, 
    category: 'Econômia',
    exclusiveTo: ''
}