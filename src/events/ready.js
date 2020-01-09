const db = require("quick.db")
const giveaways = require("discord-giveaways")
function RandomArray(arrName) {
    return arrName[Math.floor(Math.random() * arrName.length)]
}
const ms = require("parse-ms")
exports.run = (client) => {
    db.set("BotInfo_Time", Date.now())
    let message = [
        "❓ Use +ajuda para ver meus comandos! (Caso não for esse o prefixo, me marque e descubra qual é!)",
        `⁉️ Atualmente, estou em ${client.guilds.size} servidores, e ativo em ${client.channels.size} chats!`,
        "🟢 Vote em mim a cada 7 horas no site \nhttps://botsparadiscord.xyz/bots/614498625023770659 !",
    ]
    let types = [
        "PLAYING",
        "WATCHING",
        "LISTENING"
    ]
    console.log(`Fui ligado!`)
    client.user.setPresence({
        status: "online",
        game: {
            name: "✅ Fui ligado recentemente!",
            type: "WATCHING"
        }
        
    })
    
    setInterval(function () {
        client.user.setPresence({
            status: "online",
            game: {
                name: RandomArray(message),
                type: RandomArray(types)
            }
            
        })
    }, 240000)
}
