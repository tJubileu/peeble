function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
    
}
const db = require("quick.db")
const ms = require("parse-ms")
module.exports.run = async (client, message, args, utils) => {
    message.channel.send(`RESETANDO TUDO!`)
    let allUsers = client.users.array()
    for(let i = 0; i < allUsers.length; i++) {
        db.remove()
    }
    
   
}
module.exports.help = {
    aliases: ['+fullreset'],
    name: '+resetall',
    description: 'Reseta TUDO.',
    usage: '++resetall'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Econômia', /* You can make a category help command with this. */
    exclusiveTo: '518830049949122571'
}