exports.run = async (client, message, args, utils) => {
    let channel = message.mentions.channels.first()
    if (channel == null) return message.channel.send(`${message.author} ➤ Você precisa dizer o chat que você quer mudar o nome!`)
    const chat = channel.name
    if (!args[1]) return message.channel.send(`${message.author} ➤ Você precisa dizer o nome do chat!`)
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
        return message.channel.send(`${message.author} ➤ Você não possui permissão!`)
    }
    const text = args.slice(1).join(" ")
    const nawz = text.replace(/ /g,'∙')
    const naw = nawz.replace('|', '│')
    channel.setName(naw)

    await message.channel.send(`${message.author} ➤ Você alterou o nome do chat \`${chat}\` para \`${naw}\`!`)
}
module.exports.help = {
    aliases: ['renomearcanal'],
    name: 'renamechannel',
    description: 'Mude um nome de um chat para outro',
    usage: '+renamechannel #chat (nome)'
}

// Configuration


module.exports.config = {
    args: true, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Diversão',
    exclusiveTo: ''
}           
           
          
         
        
       
      
     
    
   
  
 

