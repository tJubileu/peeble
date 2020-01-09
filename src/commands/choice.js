function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}
function RandomArray(arrName) {
    return arrName[Math.floor(Math.random() * arrName.length)]
}
exports.run = (client, message, args, utils) => {
    const msgs = [
        "Acho que sim!",
        "Com certeza não.",
        "É provável que não.",
        "Talvez sim",
        "Não entendi, repete a pergunta aí.",
        "Sei lá pô, tô ocupado.",
        "Sim.",
        "**Não**",
        "Não faço idéia.",
        "**Sim**",
        "Sim ||e não||",
        "Claro",
        "Pesquisei no Google e descobri que sim",
        "Pesquisei no Google e descobri que não",
        "Não sei."
        
    ]
    if (!args[0]) {
        return message.channel.send(`${message.author} ➤ Você precisa dizer o que você quer que eu escolha!`)
    }

    message.channel.send(`${message.author} ` + RandomArray(msgs))

}
module.exports.help = {
    aliases: ['escolha'],
    name: 'choice',
    description: 'Escolhe sim, não.',
    usage: '+choice <pergunta>'
}

// Configuration

module.exports.config = {
    args: true, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Informativo',
    exclusiveTo: ''
}