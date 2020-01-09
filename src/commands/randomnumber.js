function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
    
}
exports.run = (client, message, args, utils) => {
    if (!args[0]) {
        return message.channel.send(`${message.author} ➤ Você precisa dizer 2 valores!`)
    } 
    if (args[0] > 999999999999999999 || args[1] > 999999999999999999) {
        return message.channel.send(`${message.author} ➤ Insira valores menores, esses números gigantes vão acabar me aloprando!`)
    }
    if (isNaN(args[0]) || isNaN(args[1])) {
        return message.channel.send(`${message.author} ➤ Você precisa dizer 2 __números__!`)
    }
    if (args[0] === args[1]) {
        return message.channel.send(`${message.author} ➤ Diga números que não sejam os mesmos!`)
    }
    if (args[0] < args[1]) {
        return message.channel.send("🎲 ➤ O número sorteado foi: " + "`` " + RandomRange(args[0], args[1]) + " ``")
    }
    if (args[0] > args[1]) {
        return message.channel.send("🎲 ➤ O número sorteado foi: " + "`` " + RandomRange(args[1], args[0]) + " ``")
    }

}
module.exports.help = {
    aliases: ['rn', 'roll'],
    name: 'randomnumber',
    description: 'Gera um número aleatório entre dois valores.',
    usage: '+rn <número mínimo> <número máximo>'
}

// Configuration

module.exports.config = {
    args: true, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Informativo',
    exclusiveTo: ''
}