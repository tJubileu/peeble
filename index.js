const Discord = require("discord.js")
const client = new Discord.Client( {disableEveryone: true})
const fs = require("fs")
const db = require("quick.db")
const timestamp = require('time-stamp')
const RichEmbed = Discord.RichEmbed
const ms = require("parse-ms")
const moment = require("moment")
require('dotenv').config();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();

let cmds = []

fs.readdir("./src/events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`./src/events/${file}`);
        let eventStart = eventFunction.run.bind(null, client);
        let eventName = file.split(".")[0];
        client.events.set(eventName, eventStart)
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});


fs.readdir('./src/commands/', (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
        let props = require(`./src/commands/${ f }`);
        props.fileName = f;
        cmds.push(props.help.name)
        commandsSize++
        client.commands.set(props.help.name, props);
        props.help.aliases.forEach(alias => {
            cmds.push(alias)
            client.aliases.set(alias, props.help.name);
        });
    });
});


client.on("message", async message => {
    try {
        let userCartao = db.get(`${message.author.id}.cartao`)
        let userM = db.get(`${message.author.id}.cartao`)

        if (userCartao == null) db.set(`${message.author.id}.cartao`, 0)
        if (userM == null) db.set(`${message.author.id}.dinheiro`, 0)

        let prefix = db.get(`${message.guild.id}.prefix`)
        if (prefix == null) db.set(`${message.guild.id}.prefix`, '+') 

        if (message.author.bot) return; 
        if (db.get(`${message.author.id}.itens`) == null) db.set(`${message.author.id}.itens`, [])
        if (db.get(`${message.author.id}.trabalho`) == null) db.set(`${message.author.id}.trabalho`, "Nenhum")

        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        let command = args.shift().toLowerCase()
        if (message.isMentioned(client.user) && !args[0]) return message.channel.send(`${message.author} ➤ Olá! Me chamo **Peeble**, e meu prefix neste servidor é \`${prefix}\`! Para saber mais sobre mim, você pode usar o comando \`${prefix}ajuda\`!`)
        if (message.content.indexOf(prefix) !== 0) return;

        let cooldownPrison = (600000)
        const user = message.author
        
        let prisonTime = await db.fetch(`PrisonTime_${user.id}`)
        if (prisonTime !== null && cooldownPrison - (Date.now() - lastDailyz) > 0) {
            let timeObj = ms(cooldownPrison - (Date.now() - prisonTime) )
            message.channel.send(`⛔ ➤ ${message.author} Você está **Preso(a)**, então não pode usar comandos.\n⏳ ➤ **Tempo até ser solto(a):** \`${timeObj.minutes} Minuto(s) e ${timeObj.seconds} segundo(s)\`! `)
        } else {
            if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar o bot Peeble.`)
            
            if (command && !cmds.includes(command)) {
                return message.channel.send(`⁉️ ➤ ${message.author} Este comando (\`${command}\`) não parece ser um comando meu... Caso não saiba meus comandos, você pode ver eles usando \`${prefix}help\`!`)
            }
            if (message.channel.type !== "dm" && command && message.author.id !== "518830049949122571") {
            let cooldown = (5000)
            const user = message.author
            let lastCommand = db.fetch(`LastCommand_${user.id}`)
            if (lastCommand !== null && cooldown - (Date.now() - lastCommand) > 0) {
               message.delete()
               let timeObj = ms(cooldown - (Date.now() - lastCommand) )
               if (timeObj.seconds !== 0) {
                  return message.channel.send(`⏳ ➤ ${message.author} Espere \`${timeObj.seconds} segundos\` para usar este comando novamente!`).then(m => m.delete(6000))
               } else {
                  return message.channel.send(`⏳ ➤ ${message.author} Espere \`${RandomRange(2, 100)} milisegundos\` para usar este comando novamente!`).then(m => m.delete(6000))
               }
            } else {
               db.set(`LastCommand_${user.id}`, Date.now())
            }
            }

            if (command != null) {
            const emba = new RichEmbed()
                .setTitle("Comando")
                .setAuthor(message.author.tag + ` (${message.author.id})`, message.author.avatarURL)
                .addField("Comando Usado", command, true)
                if (args.length > 0) {
                    emba.addField("ARGS", args.join(", "), true)
                } else {
                    emba.addField("ARGS", "Nenhum", true)
                }
                emba.addField("Servidor", `\`${message.guild.name}\` (${message.guild.id})`)
                emba.setTimestamp()
            client.channels.get('654359307676024842').send(emba)
            }                                                     
            if (client.aliases.has(command)) command = client.commands.get(client.aliases.get(command)).help.name

            if (client.commands.get(command).config.restricted == true) {
                if (message.author.id !== '518830049949122571') return message.channel.send("⛔ ➤ " + message.author + ' Você não pode utilizar esse comando!')
            }

            if (client.commands.get(command).config.exclusiveTo !== "" && message.author.id !== "518830049949122571") {

                if (message.author.id !== client.commands.get(command).config.exclusiveTo) {
                    return message.channel.send(`${message.author} Comando exclusivo!`)
                }
            }
            let commandFile = require(`./src/commands/${command}.js`);
            commandFile.run(client, message, args)
        }
    } catch (err) {
        if (err.message === `Cannot read property 'config' of undefined`) return;
        if (err.code == "MODULE_NOT_FOUND") return;
        console.error(err);
    }
})


client.login(process.env.token)
