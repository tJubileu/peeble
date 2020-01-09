function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}
var SI_SYMBOL = ["", "K", "Mi", "Bi", "T", "Quad", "Qui"];
function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
function abN(number){

    // what tier? (determines SI symbol)
    var tier = Math.log10(number) / 3 | 0;

    // if zero, we don't need a suffix
    if(tier == 0) return number;

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
}
const { RichEmbed } = require("discord.js")
const db = require("quick.db")
module.exports.run = async (client, message, args, utils) => {
    const list = client.guilds.get(message.guild.id)
    const mlist = []
    const ilist = []
    // Iterate through the collection of GuildMembers from the Guild getting the username property of each member 
    list.members.forEach(member => mlist.push(member.user.tag));
    list.members.forEach(member => ilist.push(member.user.id));
    //mlist contains all the user's usernames and tags(e.g. MCUniversity#0859), ilist contains all ID's 
    let bl = []
    let bn = []

    for (let i = 0; i < ilist.length; i++) {
        let bal = await db.fetch(`${ilist[i]}.dinheiro`)
        if (bal == null) bal = 0;
        //bl.push(bal + " Reals " + mlist[i])
        bl.push({money: bal, name: `${client.users.get(ilist[i]).username}#${client.users.get(ilist[i]).discriminator}`,})

    }

    function compare(a, b) {
    const bandA = a.money
    const bandB = b.money

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }

    bl.sort(compare) //function(a, b){return b-a}
      bl.reverse()
      if (bl[0] == undefined) bl[0] = {money: 0, name: "Ninguém"}
      if (bl[1] == undefined) bl[1] = {money: 0, name: "Ninguém"}
      if (bl[2] == undefined) bl[2] = {money: 0, name: "Ninguém"}
      if (bl[3] == undefined) bl[3] = {money: 0, name: "Ninguém"}
      if (bl[4] == undefined) bl[4] = {money: 0, name: "Ninguém"}
      
        let embed = new RichEmbed()
        .setColor("GREEN")
        .setTitle("Ranking de Reals\n" + message.guild.name)
        .setThumbnail(message.guild.iconURL)
        .addField("🥇 Primeiro Lugar", `${bl[0].name}\n\`${bl[0].money.toLocaleString("pt-BR")} Reals\``, true)
        .addField("🥈 Segundo Lugar", `${bl[1].name}\n\`${bl[1].money.toLocaleString("pt-BR")} Reals\``, true)
        .addField("🥉 Terceiro Lugar", `${bl[2].name}\n\`${bl[2].money.toLocaleString("pt-BR")} Reals\``, true)
        .addField("💶 Quarto Lugar", `${bl[3].name}\n\`${bl[3].money.toLocaleString("pt-BR")} Reals\``)
        .addField("💶 Quinto Lugar", `${bl[4].name}\n\`${bl[4].money.toLocaleString("pt-BR")} Reals\``)
        .setTimestamp()
        message.channel.send(embed)
}
module.exports.help = {
    aliases: ['leaderboard', 'baltop', 'rank', 'ranking'],
    name: 'top',
    description: 'Baltop.',
    usage: '+top'
}
// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Informativo', /* You can make a category help command with this. */
    exclusiveTo: ''
}
/*const list = client.guilds.get(message.guild.id); 
    const mlist = []
    const ilist = []
    // Iterate through the collection of GuildMembers from the Guild getting the username property of each member 
    list.members.forEach(member => mlist.push(member.user.tag));
    list.members.forEach(member => ilist.push(member.user.id));
    //mlist contains all the user's usernames and tags(e.g. MCUniversity#0859), ilist contains all ID's 
    console.log(mlist)
    console.log(ilist)
    let bl = []
    let bn = []

    for (let i = 0; i < ilist.length; i++) {
        let bal = await db.fetch(`${ilist[i]}.dinheiro`)
        if (bal == null) bal = 0;
        if (bal < 1) continue
        //bl.push(bal + " Reals " + mlist[i])
        bl.push(bal)
    
    }
    bl.sort(function(a, b) {
        return a - b;
      });; //function(a, b){return b-a}
      bl.reverse()
      if (bl[0] == undefined) bl[0] = "-"
      if (bl[1] == undefined) bl[1] = "-"
      if (bl[2] == undefined) bl[2] = "-"
      if (bl[3] == undefined) bl[3] = "-"
      if (bl[4] == undefined) bl[4] = "-"
      bn.sort(function(a, b) {
        return a - b;
      });; //function(a, b){return b-a}
      bn.reverse()
      if (bn[0] == undefined) bn[0] = "-"
      if (bn[1] == undefined) bn[1] = "-"
      if (bn[2] == undefined) bn[2] = "-"
      if (bn[3] == undefined) bn[3] = "-"
      if (bn[4] == undefined) bn[4] = "-"

      
      console.log(bl)
         let embed = new RichEmbed()
        .setColor("GREEN")
        .setAuthor(message.guild.name + " Rank.")
        .setDescription(`**1.** \`${bl[0].toLocaleString('pt-BR')} Reals (${abN(bl[1])})\` ${bn[0]}\n**2.** \`${bl[1].toLocaleString('pt-BR')} Reals (${abN(bl[1])})\` ${bn[1]}\n**3.** \`${bl[2].toLocaleString('pt-BR')} Reals (${abN(bl[2])}) \`\n**4.** \`${bl[3].toLocaleString('pt-BR')} Reals (${abN(bl[3])}) \`\n**5.** \`${bl[4].toLocaleString('pt-BR')} Reals (${abN(bl[4])}) \``)
        message.channel.send(embed)*/