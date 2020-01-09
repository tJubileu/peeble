function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
const db = require("quick.db")
exports.run = (client, message, args, utils) => {
   // if (message.author.id === "452196090905886722") return message.reply("Você é gay demais para usar esse comando!")
   const user = message.mentions.users.first()
    const lucky = RandomRange(1, 15000)
    const toEarn = RandomRange(35, 150)
    let botChoice = "nada"
    const userChoice = args[0]
    if (lucky <= 5000) {
        botChoice = "pedra"
    } else if (lucky > 5000 && lucky < 10000) {
        botChoice = "tesoura"
    } else if (lucky >= 10000) {
        botChoice = "papel"
    }
    if (!userChoice) {
        return message.channel.send(`${message.author} ➤ Você precisa escolher \`pedra, papel\` ou \`tesoura\`!`)
    }
    if (user && user.id === "614498625023770659") {
        return message.channel.send(`${message.author} ➤ Você escolheu **Melhor bot do Discord**, essa escolha é inválida!`)
    }
    if (userChoice === "papel" && botChoice === "pedra") {
        message.channel.send(`${message.author} ➤ Você escolheu **Papel** 📰, eu escolhi **Pedra** <:stone:638035584249495562>!\nVocê ganhou!`)
        return
    }
    if (userChoice === "papel" && botChoice === "tesoura") {
        message.channel.send(`${message.author} ➤ Você escolheu **Papel** 📰, eu escolhi **Tesoura** ✂️!\nVocê perdeu!`)
        return
    }
    if (userChoice === "papel" && botChoice === "papel") {
        return message.channel.send(`${message.author} ➤ Você escolheu **Papel** 📰, eu escolhi **Papel** 📰!\nEmpate.`)
    }

    if (userChoice === "tesoura" && botChoice === "papel") {
        message.channel.send(`${message.author} ➤ Você escolheu **Tesoura** ✂️, eu escolhi **Papel** 📰!\nVocê ganhou!`)
        return
    }
    if (userChoice === "tesoura" && botChoice === "pedra") {
        message.channel.send(`${message.author} ➤ Você escolheu **Tesoura** ✂️, eu escolhi **Pedra** <:stone:638035584249495562>!\nVocê perdeu!`)
        return
    }
    if (userChoice === "tesoura" && botChoice === "tesoura") {
        return message.channel.send(`${message.author} ➤ Você escolheu **Tesoura** ✂️, eu escolhi **Tesoura** ✂️!\nEmpate.`)
    }

    if (userChoice === "pedra" && botChoice === "tesoura") {
        message.channel.send(`${message.author} ➤ Você escolheu **Pedra** <:stone:638035584249495562>, eu escolhi **Tesoura**!\nVocê ganhou!`)
        return
    }
    if (userChoice === "pedra" && botChoice === "papel") {
        message.channel.send(`${message.author} ➤ Você escolheu **Pedra** <:stone:638035584249495562>, eu escolhi **Papel** 📰!\nVocê perdeu!`)
        return
    }
    if (userChoice === "pedra" && botChoice === "pedra") {
        return message.channel.send(`${message.author} ➤ Você escolheu **Pedra** <:stone:638035584249495562>, eu escolhi **Pedra** <:stone:638035584249495562>!\nEmpate.`)
    }
    return message.channel.send(`${message.author} ➤ Escolha inválida!`)
}
module.exports.help = {
    aliases: ['ppt'],
    name: 'jkp',
    description: 'Jokenpô/Pedra papel tesoura',
    usage: '+jkp'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Diversão', /* You can make a category help command with this. */
    exclusiveTo: ''
}