function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
    
}
const db = require("quick.db")
const ms = require("parse-ms")
const { RichEmbed } = require("discord.js")
module.exports.run = async (client, message, args, utils) => {
    const userWork = db.get(`${message.author.id}.trabalho`)
    const userQI = db.get(`${message.author.id}.inteligencia`)
    const userItens = db.get(`${message.author.id}.itens`)
    const prefix = db.get(`${message.guild.id}.prefix`)
    if (!args[0] || args[0] === "1") {
        const emb1 = new RichEmbed()
            .setAuthor("Página 1")
            .setTitle("Empregos Disponíveis:")
            .setColor("RANDOM")
            .addField("1️⃣ **Mendigo [1]**", ` ● 💰 **Salário:** \`15 - 120 Reals\`\n ● ⚙️ **Necessário:** 0 de Inteligência`)
            .addField("🌭 **Vendedor(a) de Fast-Food [2]**", ` ● 💰 **Salário:** \`800 - 1.200 Reals\`\n ● ⚙️ **Necessário:** 3 de Inteligência`)
            .addField("🗑️ **Lixeiro [3]**", ` ● 💰 **Salário:** \`1.300 - 1.500 Reals\`\n ● ⚙️ **Necessário:** 5 de Inteligência`)
            .addField("🌲 **Lenhador(a) [4]**", ` ● 💰 **Salário:** \`1.500 - 1.900 Reals\`\n ● ⚙️ **Necessário:** 8 de Inteligência`)
            .setFooter("Use +emprego 2 para ver a próxima página")
        return message.channel.send("+emprego novo (ID do Emprego)", emb1)
    }
    if (args[0] && args[0] === "2") {
        const emb1 = new RichEmbed()
        .setAuthor("Página 2")
        .setTitle("Empregos Disponíveis:")
        .setColor("RANDOM")
        .addField("🔴 **Ladrão [5]**", ` ● 💰 **Salário:** \`10.000 - 14.000 Reals\`\n ● ⚙️ **Necessário:** 2 de Inteligência\n ● ⛔ **Perigo:** Alto`)
        .addField("🔨 **Advogado [6]**", ` ● 💰 **Salário:** \`5.000 - 8.000 Reals\`\n ● ⚙️ **Necessário:** 15 de Inteligência`)
        .addField("👮 **Policial [7]**", ` ● 💰 **Salário:** \`8.000 - 25.000 Reals\`\n ● ⚙️ **Necessário:** 20 de Inteligência`)
        .setFooter("Use +emprego 1 para ver a página anterior")
    return message.channel.send("+emprego novo (ID do Emprego)", emb1)
    }
    if (args[0] == "novo") {
        let work = args[1]
        if (!work) return message.channel.send(`❌ ➤ ${message.author} Você precisa dizer o ID do emprego que você quer trabalhar!\nUse ${prefix}emprego 1 - ${prefix}emprego 2 para ver os empregos disponíveis!`)
        if (work == "1") {
            db.set(`${message.author.id}.trabalho`, "Mendigo")
            return message.channel.send(`<:correct:659543887416786956> ➤ ${message.author} Você agora é um(a) \`Mendigo(a)\`!`)
        }
        if (work == "2") {
            if (userQI < 3) return message.channel.send(`❌ ➤ ${message.author} Você precisa ter \`3\` de inteligência para ter este trabalho!`)
            db.set(`${message.author.id}.trabalho`, "Vendedor(a) de Fast-Food")
            return message.channel.send(`<:correct:659543887416786956> ➤ ${message.author} Você agora é um(a) \`Vendedor(a) de Fast-Food\`!`)
        }
        if (work == "3") {
            if (userQI < 5) return message.channel.send(`❌ ➤ ${message.author} Você precisa ter \`5\` de inteligência para ter este trabalho!`)
            db.set(`${message.author.id}.trabalho`, "Lixeiro")
            return message.channel.send(`<:correct:659543887416786956> ➤ ${message.author} Você agora é um(a) \`Lixeiro(a)\`!`)
        }
        if (work == "4") {
            if (userQI < 8) return message.channel.send(`❌ ➤ ${message.author} Você precisa ter \`8\` de inteligência para ter este trabalho!`)
            db.set(`${message.author.id}.trabalho`, "Lenhador(a)")
            return message.channel.send(`<:correct:659543887416786956> ➤ ${message.author} Você agora é um(a) \`Lenhador(a)\`!`)
        }
        if (work == "5") {
            if (userQI < 2) return message.channel.send(`❌ ➤ ${message.author} Você precisa ter \`2\` de inteligência para ter este trabalho!`)
            db.set(`${message.author.id}.trabalho`, "Ladrão")
            return message.channel.send(`<:correct:659543887416786956> ➤ ${message.author} Você agora é um(a) \`Ladrão\`!`)
        }
        if (work == "6") {
            if (userQI < 15) return message.channel.send(`❌ ➤ ${message.author} Você precisa ter \`15\` de inteligência para ter este trabalho!`)
            db.set(`${message.author.id}.trabalho`, "Advogado(a)")
            return message.channel.send(`<:correct:659543887416786956> ➤ ${message.author} Você agora é um(a) \`Advogado(a)\`!`)
        }
        if (work == "7") {
            if (userQI < 20) return message.channel.send(`❌ ➤ ${message.author} Você precisa ter \`20\` de inteligência para ter este trabalho!`)
            db.set(`${message.author.id}.trabalho`, "Policial")
            return message.channel.send(`<:correct:659543887416786956> ➤ ${message.author} Você agora é um(a) \`Policial\`!`)
        }
        return message.channel.send(`❌ ➤ ${message.author} Você precisa dizer um ID de emprego válido!\nUse ${prefix}emprego 1 - ${prefix}emprego 2 para ver os empregos disponíveis!`)
    }
    message.channel.send(`❌ ➤ ${message.author} Você parece ter executado este comando de forma errada!\nUse ${prefix}emprego 1 - ${prefix}emprego 2 para ver os empregos disponíveis!`)

}
module.exports.help = {
    aliases: ['empregos'],
    name: 'emprego',
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