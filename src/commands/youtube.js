function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}
const blacklist = [
    "cu",
    "merda",
    "bosta",
    "pinto",
    "pau",
    "pal",
    "cu",
    "krl",
    "rola",
    "peito",
    "vibrador",
    "penis",
    "pênis",
    "piroca",
    "pica",
    "pirocona",
    "porra",
    "poha",
    "caralho",
    "karalho",
    "puta",
    "puto",
    "vadia",
    "desgraça",
    "desgraçado",
    "desgraçada",
    "bunda",
    "goza",
    "gozado",
    "filho da puta",
    "fdp",
    "fds",
    "foda",
    "fodase",
    "foda-se",
    "fodasse",
    "pornô",
    "porno",
    "xvideos",
    "fudidos",
    "arrombado",
    "arrombada",
    "cy",
    "buceta",
    "kct",
    "cacete",
    "fdc",
    "opora",
    "oporra",
    "gay",
    "burro",
    "hentai",
    "pqp",
    "pora",
    "pica",
    "pika",
    "c u",
    "uc",
    "c  u",
    "viado",
    "put",
    "arromb",
    "gat",
    "peito",
    "censura"

]
const comments = [
    "Que vídeo incrível! Faça mais.",
    "Vídeo mais ruim? Impossível!",
    "Galera dá like nesse comentário pra não morrer",
    "Gostei desse vídeo",
    "Meu deus... Como você não desiste do canal com esses vídeos merdas? Lixo total.",
    "Deslike",
    "Uau! Eu deveria ter conhecido este canal antes, conteúdo ótimo!",
    "Canal bosta, só fala merda!",
    "Como um canal consegue ser tão ruim?",
    "Esse vídeo mudou minha vida! INCRÍVEL!",
    "Galera, se inscrevam no meu canal",
    "Pior vídeo que já vi.",
    "Me doa uma iLixeira quero virar YouTuber ;-;",
    "Vídeo muito bom, mas precisa melhorar algumas coisas.",
    "Falou pouco, mas falou bosta. Vídeo ruim",
    "Garelinha si inscrevi nu meu anal",
    "Vídeo muito bom",
    "Vídeo muito ruim",
    "Esse YouTuber usa bots!",
    "Vídeo muito bom! Continua",
    "Como ele não desiste desses vídeos? Lixo total",
    "Odeio esse canal, vim só pra dar deslike",
    "Esse vídeo tava engraçado demais! Faz mais pfv",
    "Like",
    "Manoooo, eu ri muito no momento 01:32 kkkkkkkkkkk",
    "Uau! A qualidade está ótima!",
    "Como eu não conhecia esse canal antes?",
    "Esse YouTuber é muito gostoso",
    "Meu YouTuber favorito!",
    "Odeio esse YouTuber",
    "Escrevi e saí correndo comi o cu de quem ta lendo",
    "Não gostei desse vídeo, mas dei like porque sou seu fã",
    "Mds esse vídeo é mt bizarro",
    "Eu odeio este YouTuber... Mas esse vídeo é ótimo!",
    "Uau, a qualidade melhorou!",
    "Não entendi nada que você falou nesse vídeo, melhora o áudio!",
    "Essa sua câmera é bem ruim",
    "Gostei muito desse vídeo!",
    "UAU, AMEI ESSE VÍDEO #POSTEMAIS",
    "Q vídeo ruim kakaka",
    "First",
    "Alguém me doa um iLixo? Não aguento mais a demora pra postar vídeos ;-",
    "Queria um Carro velho para trabalhar mais rápidamente",
    "Esse YouTuber deve ser muito rico",
    "Queria que todos os vídeos desse canal fossem desmonetizados hahaha",
    "Odeio tanto o YouTube, mas passei aqui pra dar deslike",
    "Vou botar bots nesse canal pro YouTube banir ele!",
    "Queria poder fazer uma doação para esse canal!",
    "Wtf, que vídeo estranho",
    "Meu deus, esse canal MERECE UM STRIKE!",
    "Kkkkkkkkkkkkkk ri muito no ínicio",
    "Mandei esse canal pro meu amigo, mt bom",
    "Kkkkkkkkkkkkkkkkkkkkk amei esse vídeo",
    "Meu deus... PIOR VÍDEO QUE JÁ VI EM TODA MINHA VIDA!",

]
const ids = [
    "518830049949122571",
    "556480900913954836",
    "288367528646803466"
]
var SI_SYMBOL = ["", "K", "Mi", "Bi", "T", "Quad", "Qui", "Ss", "Sep", "Oc", "N", "De"];
const ms = require("parse-ms")
function RandomArray(arrName) {
    return arrName[Math.floor(Math.random() * arrName.length)]
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
    let prefix = db.get(`${message.guild.id}.prefix`)
    const user = message.author
    if (db.get(`${user.id}.itens`) == null) db.set(`${user.id}.itens`, [])
    if (!db.get(`${user.id}.itens`).includes("iLixeira")) {
        return message.channel.send(`${message.author} ➤ Para acessar o <:youtube:653311948850462730> YouTube™, você precisa de uma iLixeira 🖥️!\nPara comprar uma, use: \`${prefix}comprar 2\``)
    }
    const userMoney = db.get(`${user.id}.dinheiro`)
    const channelName = db.get(`${user.id}.channelName`)
    const subs = db.get(`${user.id}.channelsubs`)
    const views = db.get(`${user.id}.channelviews`)
    const vidcount = db.get(`${user.id}.channelvids`)
    const moneyearned = db.get(`${user.id}.channelmoneyearned`)
    const cmd = args[0]
    const cmd2 = args[1]
    if (!cmd) {
        return message.channel.send(`${message.author} ➤ Você precisa dizer o que você quer fazer no YouTube!\n\`Caso não saiba o que se pode fazer, use ${prefix}youtube help\``)
    }
    if (channelName == null) db.set(`${user.id}.channelName`, `Canal do(a) ${user.username}`)
    if (subs == null) db.set(`${user.id}.channelsubs`, 0)
    if (views == null) db.set(`${user.id}.channelviews`, 0)
    if (vidcount == null) db.set(`${user.id}.channelvids`, 0)
    if (moneyearned == null) db.set(`${user.id}.channelmoneyearned`, 0)
    if (cmd === "help") {
        const helpembed = new RichEmbed()
            .setTitle(`Comandos do YouTube`)
            .addField(`**${prefix}yt renamechannel**`, `*O nome do seu canal é ruim? Troque com esse comando!*`, true)
            .addField(`**${prefix}yt assistir**`, `*Assista YouTube com esse comando!*`, true)
            .addField(`**${prefix}yt channel / +yt canal**`, `*Mostra informações sobre algum canal do YouTube.*`, true)
            .addField(`**${prefix}yt postar**`, `*Posta um vídeo no YouTube! (Você pode virar YouTuber e ganhar dinheiro com isso).*`, true)
            .addField(`**${prefix}yt alta**`, `*Mostra o Em Alta!*`, true)
            .addField(`**${prefix}yt top**`, `*Mostra os YouTubers mais famosos!*`, true)
            .addField(`**${prefix}yt setimage**`, `*Muda a imagem de perfil do seu canal (Você pode mencionar usuários para usar sua imagem de perfil).*`, true)
        message.author.send(helpembed)
        message.channel.send(`${message.author} ➤ Enviei o help no seu PV! (Se não recebeu, verifique se seu PV está aberto)`)
    }
    if (cmd === 'assistir' || cmd === 'watch') {
        const member = message.mentions.users.first() || client.users.get(cmd2)
        if (!member) {
            return message.channel.send(`${message.author} ➤ Você precisa dizer a pessoa que você quer assistir o vídeo!`)
        }
        if (member.id === message.author.id) {
            message.channel.send(`${message.author} ➤ Você assistiu seu vídeo mais recente! (Você ganhou 1 view 👀).`)
            db.add(`${member.id}.channelviews`, 1)
        } else {
            message.channel.send(`${message.author} ➤ Você assistiu o vídeo mais recente do \`${db.get(`${member.id}.channelName`)}\` (Canal do(a) ${member.username})! \n(Ele(a) ganhou 1 view 👀).`)
            db.add(`${member.id}.channelviews`, 1)
        }
    }
    if (cmd === 'setchannelname' || cmd === 'renamechannel') {
        if (!args[1]) return message.author.send(`${message.author} ➤ Você precisa informar qual nome você quer pôr no seu canal!`)
        db.set(`${user.id}.channelName`, args.slice(1).join(` `))
        return message.channel.send(`<:youtube:653311948850462730> ${message.author} ➤ O nome do seu canal foi alterado para: \`${args.slice(1).join(` `)}\`!`)
    }

    if (cmd === 'setchannelimage' || cmd === 'setimage') {
        const ping = message.mentions.users.first() || client.users.get(cmd2)
        if (!ping && message.attachments.first() == null) {
            return message.channel.send(`${message.author} ➤ Não encontrei nenhuma imagem válida para usar! (Infelizmente atualmente eu só vejo imagens enviadas. Links de imagens não são aceitos.)`)
        } else {
            if (!ping) {
                const eb = new RichEmbed()
                    .setImage(message.attachments.first().url)
                db.set(`${message.author.id}.channelimage`, message.attachments.first().url)
                message.channel.send(`${message.author} ➤ Sua imagem do canal foi alterada!`)
                message.channel.send(eb)
            } else if (ping){
                const eb = new RichEmbed()
                    .setImage(ping.avatarURL)
                db.set(`${message.author.id}.channelimage`, ping.avatarURL)
                message.channel.send(`${message.author} ➤ Sua imagem do canal foi alterada!`)
                message.channel.send(eb)
            }

            
        }
    }
//#region CHANNELINFO
    if (cmd === 'channelinfo' || cmd === 'channel' || cmd === 'canal') {
        const member = message.mentions.users.first() || client.users.get(cmd2) || message.author
        const cchannelName = db.get(`${member.id}.channelName`)
        const csubs = db.get(`${member.id}.channelsubs`)
        const cviews = db.get(`${member.id}.channelviews`)
        const cvidcount = db.get(`${member.id}.channelvids`)
        const cmoneyearned = db.get(`${member.id}.channelmoneyearned`)
        const ccoments = db.get(`${member.id}.channelcoments`)
        const cimage = db.get(`${member.id}.channelimage`)
        const cstk = db.get(`${member.id}.channelstrikes`)
        let mba
        if (!member.avatarURL) mba = "https://support.discordapp.com/hc/user_images/l12c7vKVRCd-XLIdDkLUDg.png"
        if (member.avatarURL) mba = member.avatarURL
        if (cchannelName == null) db.set(`${member.id}.channelName`, `Canal do ${member.username}`)
        if (csubs == null) db.set(`${member.id}.channelsubs`, 0)
        if (cviews == null) db.set(`${member.id}.channelviews`, 0)
        if (cvidcount == null) db.set(`${member.id}.channelvids`, 0)
        if (ccoments == null) db.set(`${member.id}.channelcoments`, 0)
        if (cimage == null) db.set(`${member.id}.channelimage`, 'https://worldfoodtravel.org/wp-content/uploads/2019/06/no-image.jpg')
        if (cstk == null) db.set(`${member.id}.channelstrikes`, 0)
        

        const cemb = new RichEmbed()
        if (member.id !== message.author.id) {
            cemb.setFooter(`Canal do ${member.username} (Nome do canal: ${cchannelName}) ----------------------`, mba)
        } else {
            cemb.setFooter(`Seu canal (Nome do canal: ${cchannelName}) ----------------------`, mba)
        }
            cemb.setTimestamp()
        if (cchannelName == null) {
            cemb.setTitle(`Informações de\nCanal do ${member.username}`)
        } else {
            cemb.setTitle(`Informações de\n${cchannelName}`)
        }
        if (csubs == null) {
            cemb.addField(`👤 Inscritos`, `0`, true)
        } else {
            cemb.addField(`👤 Inscritos`, `${csubs.toLocaleString("pt-BR")}`, true)
        }
        if (cviews == null) {
           cemb.addField(`👀 Visualizações Totais`, `0`, true)
        } else {
            cemb.addField(`👀 Visualizações Totais`, `${cviews.toLocaleString("pt-BR")}`, true)
        }
        if (cvidcount == null) {
            cemb.addField(`<:youtube:653311948850462730> Vídeos postados`, `0`, true)
        } else {
            cemb.addField(`<:youtube:653311948850462730> Vídeos postados`, `${cvidcount}`, true)
        }
        if (cmoneyearned == null) {
            cemb.addField(`💸 Reals ganhos`, '0', true)
        } else {
            cemb.addField(`💸 Reals ganhos`, `${cmoneyearned.toLocaleString("pt-BR")}`, true)
        }
        if (ccoments == null) {
            cemb.addField(`🗨️ Comentários`, '0', true)
        } else {
            cemb.addField(`🗨️ Comentários`, `${ccoments.toLocaleString("pt-BR")}`, true)
        }
        if (cstk == null) {
            cemb.addField(`<:strike:653677619535151132> Strikes`, '0', true)
        } else {
            cemb.addField(`<:strike:653677619535151132> Strikes`, `${cstk.toLocaleString("pt-BR")}`, true)
        }
        if (csubs < 500000) {
            cemb.addField(`🕶️ Fama`, `Baixa`, true)
        }
        if (csubs > 500000 && csubs < 1000000) {
            cemb.addField(`🕶️ Fama`, `Média`, true)
        }
        if (csubs > 1000000 && csubs < 5000000) {
            cemb.addField(`🕶️ Fama`, `Alta`, true)
        }
        if (csubs > 5000000 && csubs < 25000000) {
            cemb.addField(`🕶️ Fama`, `Gigante`, true)
        }
        if (csubs > 25000000 && csubs < 60000000) {
            cemb.addField(`🕶️ Fama`, `Super Gigante`, true)
        }
        if (csubs > 60000000 && csubs < 100000000) {
            cemb.addField(`🕶️ Fama`, `ENORME!`, true)
        }
        if (csubs > 100000000 && csubs < 500000000) {
            cemb.addField(`🕶️ Fama`, `SUPER ENORME!`, true)
        }
        if (csubs > 5000000000) {
            cemb.addField(`🕶️ Fama`, `SUPREMAMENTE GIGANTESCA!`, true)
        }
        if (cimage == null) {
            cemb.setImage("https://worldfoodtravel.org/wp-content/uploads/2019/06/no-image.jpg")
        } else {
            cemb.setImage(`${cimage}`)
        }
        return message.channel.send(cemb)
    }
//#endregion


//#region POSTAR
    if (cmd === "postar" || cmd === "post") {
        if (message.channel.type == 'dm') return
        let altachance = RandomRange(0, 100)
        let demchance = RandomRange(0, 100)
        let demonetized = false
        let cooldown = 120000 * 2
        const user = message.author
        if (db.get(`demchance`) == null) db.set(`demchance`, 100)
        if (db.get(`${message.author.id}.itens`).includes("iLixo")) cooldown = Math.round(120000)
        if (demchance > db.get(`demchance`)) demonetized = true
        let lastDaily = await db.fetch(`LastVid_${user.id}`)
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily) )
            if (!db.get(`${message.author.id}.itens`).includes("iLixo")) {
                return message.channel.send(`${message.author} ➤ Você já postou um vídeo recentemente! \n**Tente de novo em:** \`${timeObj.minutes} minutos e ${timeObj.seconds} segundos\`!\n> **DICA:** Se você ter um incrível **iLixo X**, seu cooldown é diminuído pra 2 minutos! \`${prefix}comprar 1\` `)
            } else { 
                return message.channel.send(`${message.author} ➤ Você já postou um vídeo recentemente! \n**Tente de novo em:** \`${timeObj.minutes} minutos e ${timeObj.seconds} segundos\`!`)
            }
        } else {
            if (!cmd2) {
                return message.channel.send(`${message.author} ➤ Você precisa dizer o título do vídeo!`)
            }
            for(let i = 0; i < blacklist.length; i++) {
                if (message.content.toLowerCase().includes(blacklist[i])) {
                    demonetized = true
                }
            }
            let vE = 0
            if (views === 0 && subs === 0) {
                vE = RandomRange(1, 40)
            } else if (subs < 400000 && subs > 0){
                vE = RandomRange(0, Math.round((views + (subs / 8))))
            } else if (subs > 400000) {
                vE = RandomRange(0, Math.round((views / 2 + (subs / 11))))
            }
            const lastv = db.get(`${message.author.id}.channelast`)
            if (lastv != null && lastv == args.slice(1).join(` `)) {
                return message.channel.send(`❌ ➤ ${message.author} Você parece estar postando vídeos com o mesmo nome... Não faça isso!`)
            }
            let sE = Math.round(RandomRange(0,(vE / 5)))
            let likes = RandomRange(vE/ 2, vE)
            let mte = Math.round((vE / 1000))
            let deslikes = (vE - likes)
            let cE = Math.round((vE / 2) - (likes / 2))
            if (subs > 400000 && subs < 1000000) {
                sE = Math.round(RandomRange(0,vE / 18))
                vE = Math.round(RandomRange(0,vE / 2.3))
                likes = RandomRange(vE/ 2, vE)
                mte = Math.round(RandomRange(0,(vE / 1300)))
                deslikes = (vE - likes)
                cE = Math.round(RandomRange(0,(vE / 2) - (likes / 2)))
            } else if (subs > 1000000 && subs < 5000000) {
                vE = Math.round(RandomRange(0, vE / 7))
                sE = Math.round(RandomRange(0,vE / 19))
                likes = RandomRange(vE/ 2, vE)
                mte = Math.round(RandomRange(0,(vE / 1600)))
                deslikes = (vE - likes)
                cE = Math.round(RandomRange(0, (vE) - (likes)))
            } else if (subs > 5000000 && subs < 15000000) {
                vE = Math.round(RandomRange(0,vE / 30))
                sE = Math.round(RandomRange(0, vE / 25))
                likes = RandomRange(vE/ 2, vE)
                mte = Math.round(RandomRange(0,(vE / 1900)))
                deslikes = (vE - likes)
                cE = Math.round(RandomRange(0, (vE) - (likes)))
            } else if (subs > 15000000 && subs < 40000000) {
                vE = Math.round(RandomRange(0,vE / 45))
                sE = Math.round(RandomRange(0,vE / 35))
                likes = RandomRange(vE/ 2, vE)
                mte = Math.round(RandomRange(0,(vE / 2200)))
                deslikes = (vE - likes)
                cE = Math.round(RandomRange(0, (vE) - (likes)))
            } else if (subs > 40000000 && subs < 100000000) {
                vE = Math.round(RandomRange(0,vE / 50))
                sE = Math.round(RandomRange(0,vE / 50))
                likes = RandomRange(vE/ 2, vE)
                mte = Math.round(RandomRange(0,(vE / 2400)))
                deslikes = (vE - likes)
                cE = Math.round(RandomRange(0, (vE) - (likes)))
            }
            else if (subs > 100000000 && subs < 200000000) {
                vE = Math.round(RandomRange(0,vE / 55))
                sE = Math.round(RandomRange(0,vE / 90))
                likes = RandomRange(vE/ 2, vE)
                mte = Math.round(RandomRange(0,(vE / 2800)))
                deslikes = (vE - likes)
                cE = Math.round(RandomRange(0, (vE) - (likes)))
            }
            else if (subs > 200000000 && subs < 400000000) {
                vE = Math.round(RandomRange(0,vE / 40))
                sE = Math.round(RandomRange(0,vE / 350))
                likes = RandomRange(vE/ 2, vE)
                mte = Math.round(RandomRange(0,(vE / 3400)))
                deslikes = (vE - likes)
                cE = Math.round(RandomRange(0, (vE) - (likes)))
            }
            else if (subs > 400000000) {
                vE = Math.round(RandomRange(0,vE / 30))
                sE = Math.round(RandomRange(0,vE / 700))
                likes = RandomRange(vE/ 2, vE)
                mte = Math.round(RandomRange(0,(vE / 3900)))
                deslikes = (vE - likes)
                cE = Math.round(RandomRange(0, (vE) - (likes)))
            }
            
            if (altachance > 95) {
                if (vE == null) vE = 0
                if (mte == null) mte = 0
                if (cE == null) cE = 0
                if (likes == null) likes =0
                if (deslikes == null) deslikes = 0
                if (sE == null) sE = 0
                cE = cE * 2
                mte = mte * 2
                likes = likes * 2
                deslikes = Math.round(deslikes / 2) 
                sE = sE * 2
                vE = Math.round(vE * 5)
                message.channel.send(`> ${message.author} **EM ALTA!**`)
                db.set(`${message.guild.id}.ea_titulo`, args.slice(1).join(` `))
                db.set(`${message.guild.id}.ea_views`, vE)
                db.set(`${message.guild.id}.ea_subs`, sE)
                db.set(`${message.guild.id}.ea_likes`, likes)
                db.set(`${message.guild.id}.ea_deslikes`, deslikes)
                if (demonetized == false) {
                    db.set(`${message.guild.id}.ea_dinheiroganho`, mte)
                } else {
                    db.set(`${message.guild.id}.ea_dinheiroganho`, 0)
                }
                db.set(`${message.guild.id}.ea_comentarios`, cE)
                db.set(`${message.guild.id}.ea_canal`, db.get(`${user.id}.channelName`))
            }
            if (deslikes > likes) {
                mte = Math.round(mte / 2)
            }
            if (demonetized == true) {
                mte = 0
            }
            if (sE == null) sE = 0
            sE++
            if (vE == null) ve = 0
            if (vE == 0) vE = RandomRange(2, 16)
            if (mte == null) mte = 0
            if (cE == null) cE = 0
            if (likes == null) likes =0
            let comen = db.get(`${user.id}.channelcoments`)
            const vidembed = new RichEmbed() 
                .setTitle("✅ Vídeo Postado!")
                .setColor(0xd10004)
                .addField(`<:youtube:653311948850462730> Título do Vídeo`, '`' + args.slice(1).join(` `) + "`", true)
                .addField(`👀 Views`, vE.toLocaleString("pt-BR"), true)
                .addField(`👤 Novos Inscritos`, sE.toLocaleString("pt-BR"), true)
                .addField(`<:like:653335275681873972> Likes`, likes.toLocaleString("pt-BR"), true)
                .addField(`<:deslike:653335226855981067> Deslikes`, deslikes.toLocaleString("pt-BR"), true) 
            if (demonetized == true) {
                vidembed.addField(`💸 Dinheiro Ganho`, '<:desmonetizacao:653758109906501672> 0', true)
            } else {
                vidembed.addField(`💸 Dinheiro Ganho`, "<:monetizacao:653991061676621825> " + mte.toLocaleString("pt-BR"), true)
            }
            if (comen == null || comen < 1) {
                vidembed.addField(`💬 Comentários`, '0', true)
            } else {
                vidembed.addField(`💬 Comentários`, cE.toLocaleString("pt-BR"), true)
            }
            if (!comen == null || comen > 0) {
                vidembed.addField(`🗨️ Comentário com maior relevância`, "`" + RandomArray(comments) + "`")
            } else {
                vidembed.addField(`🗨️ Comentário com maior relevância`, "`" + "NENHUM COMENTÁRIO" + "`")
            }
                
                vidembed.setThumbnail("https://cdn.discordapp.com/attachments/638100706007711775/653332784466755588/unknown.png")
                vidembed.setFooter(`Postado por ${message.author.username}`, message.author.avatarURL)
            
            message.channel.send(vidembed)
            if (sE == null || sE < 1) {
                db.add(`${user.id}.channelsubs`, 0)
            } else {
                db.add(`${user.id}.channelsubs`, sE)
            }
            db.add(`${user.id}.channelviews`, vE)
            db.add(`${user.id}.channelvids`, 1)
            if (cE == null || cE < 1) {
                db.add(`${user.id}.channelcoments`, 0)
            } else {
                db.add(`${user.id}.channelcoments`, cE)
            }
            db.add(`${user.id}.dinheiro`, mte)
            db.add(`${user.id}.channelmoneyearned`, mte)
            db.set(`${message.author.id}.channelast`, args.slice(1).join(` `))
            db.set(`LastVid_${user.id}`, Date.now())
        }   
    }
//#endregion

if (cmd === "strike") {
    const user = message.mentions.users.first() || client.users.get(cmd2)
    const punish1 = new RichEmbed()
        .setTitle("💀 Punição")
        .setAuthor(message.author.tag, message.author.avatarURL)
        .addField(`Usuário Punido`, user.tag, true)
        .addField(`Punição`, `\`Strike adicionado\``)
        .addField(`Punido no Servidor`, `\`${message.guild.name}\` (${message.guild.id})`, true)
        .addField(`Motivo`, `\`Nenhum\``)
        .setTimestamp()
    if (!ids.includes(message.author.id)) return message.channel.send(`❌ ➤ ${message.author} Comando restrito para Moderadores da Lixeira Robótica!`)
    if (!user || user == null) return message.channel.send(`${message.author} Você precisa dizer quem você quer dar strike.`)
    db.add(`${user.id}.channelstrikes`, 1)
    message.channel.send(`<:strike:653677619535151132> Strike adicionado! \`${user.username}\` Recebeu um strike.`)
    client.channels.get("660646564439785485").send(punish1)
    if (db.get(`${user.id}.channelstrikes`) >= 3) {
        db.set(user.id, {channelName: null, channelviews: 0, channelsubs: 0, channelvids: 0, channelmoneyearned: 0, channelcomments: 0, channelstrikes: 0, channelimage: null} )
        message.channel.send(`${user.username} Chegou a 3 strikes e teve seu canal deletado!`)
    }
    setInterval(function(){
        db.subtract(`${user.id}.channelstrikes`, 1)
    }, 3.6e+6)
}
if (cmd === "removestrike") {
    const user = message.mentions.users.first() || client.users.get(cmd2)
    if (!ids.includes(message.author.id)) return message.channel.send(`❌ ➤ ${message.author} Comando restrito para Moderadores da Lixeira Robótica!`)
    if (!user || user == null) return message.channel.send(`${message.author} Você precisa dizer quem você quer tirar um strike.`)
    const punish = new RichEmbed()
        .setTitle("💀 Punição")
        .setAuthor(message.author.tag, message.author.avatarURL)
        .addField(`Usuário Punido`, user.tag, true)
        .addField(`Punição`, `\`Strike removido\``)
        .addField(`Punido no Servidor`, `\`${message.guild.name}\` (${message.guild.id})`, true)
        .addField(`Motivo`, `\`Nenhum\``)
        .setTimestamp()
    if (db.get(`${user.id}.channelstrikes`) <= 0) {
        client.channels.get("660646564439785485").send(punish)
        message.channel.send(`${message.author} Este membro não possui strikes!`)
        return 
    }

    db.add(`${user.id}.channelstrikes`, -1)
    message.channel.send(`<:strike:653677619535151132> Strike removido! \`${user.username}\` Perdeu um strike.`)
}
//#region EM ALTA
    if (cmd === "emalta" || cmd === "alta") {

        const tit = db.get(`${message.guild.id}.ea_titulo`)
        const vE = db.get(`${message.guild.id}.ea_views`)
        const sE = db.get(`${message.guild.id}.ea_subs`)
        const likes = db.get(`${message.guild.id}.ea_likes`)
        const deslikes = db.get(`${message.guild.id}.ea_deslikes`)
        const mte = db.get(`${message.guild.id}.ea_dinheiroganho`)
        const cn = db.get(`${message.guild.id}.ea_canal`)
        if (tit == null) {
            return message.channel.send(`${message.author} ➤ Ainda não tem nenhum vídeo no Em Alta! (Poste algum, talvez ele entre!)`)
        }
        
        const comen = db.get(`${user.id}.channelcoments`)
        const vidembed = new RichEmbed() 
            .setTitle("Em alta!")
            .addField(`😎 Canal`, '`' + cn + "`", true)
            .addField(`<:youtube:653311948850462730> Título do Vídeo`, '`' + tit + "`", true)
            .addField(`👀 Visualizações`, vE.toLocaleString("pt-BR"), true)
            .addField(`👤 Inscritos Ganhos`, (sE).toLocaleString("pt-BR"), true)
            .addField(`<:like:653335275681873972> Likes`, (likes).toLocaleString("pt-BR"), true)
            .addField(`<:deslike:653335226855981067> Deslikes`, (Math.round((deslikes))).toLocaleString("pt-BR"), true)
            if (mte <= 0) { 
                vidembed.addField(`💸 Dinheiro Ganho`, (Math.round(mte)).toLocaleString("pt-BR"), true)
            } else {
                vidembed.addField(`💸 Dinheiro Ganho`, (Math.round(mte)).toLocaleString("pt-BR"), true)
            }

            vidembed.setThumbnail("https://cdn.discordapp.com/attachments/638100706007711775/653332784466755588/unknown.png")
        message.channel.send(vidembed)
    }
    if (cmd === "demchance" || cmd === "desmonetização") {
        
        if (message.author.id !== "518830049949122571") {
            return message.channel.send(`${message.author} ➤ Você não tem permissão!`)
        }
        if (!args[1]) return message.channel.send(`${message.author} Você precisa dizer um número para mudar a porcentagem!`)
        if (isNaN(args[1])) return message.channel.send(`${message.author} Número inválido!`)
        if (args[1] < 0 || args[1] > 100) return message.channel.send(`${message.author} Diga um número entre 0 e 100!`)
        const toSet = (100 - args[1])
        db.set(`demchance`, toSet)
        return message.channel.send(`${message.author} Chance de ser desmonetizado sem motivos alterado para \`${100 - toSet}%\`!`)

    }
    if (cmd === "top" || cmd === "rank" || cmd === "leaderboard") {
        const list = client.guilds.get(message.guild.id); 
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
      let bal = await db.fetch(`${ilist[i]}.channelsubs`)
      if (bal == null) bal = 0;
      if (bal < 1) continue
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
    if (bl[0] == undefined) bl[0] = "-"
    if (bl[1] == undefined) bl[1] = "-"
    if (bl[2] == undefined) bl[2] = "-"
    if (bl[3] == undefined) bl[3] = "-"
    if (bl[4] == undefined) bl[4] = "-"
    
    console.log(bl)
       let embed = new RichEmbed()
      .setColor("GREEN")
      .setTitle("Rank de Inscritos\n" + message.guild.name)
      .setThumbnail(message.guild.iconURL)
      .addField("🥇 Primeiro Lugar", `${bl[0].name}\n\`${bl[0].money.toLocaleString("pt-BR")} Inscritos\``, true)
      .addField("🥈 Segundo Lugar", `${bl[1].name}\n\`${bl[1].money.toLocaleString("pt-BR")} Inscritos\``, true)
      .addField("🥉 Terceiro Lugar", `${bl[2].name}\n\`${bl[2].money.toLocaleString("pt-BR")} Inscritos\``, true)
      .addField("<:youtube:653311948850462730> Quarto Lugar", `${bl[3].name}\n\`${bl[3].money.toLocaleString("pt-BR")} Inscritos\``)
      .addField("<:youtube:653311948850462730> Quinto Lugar", `${bl[4].name}\n\`${bl[4].money.toLocaleString("pt-BR")} Inscritos\``)
      .setTimestamp()
      message.channel.send(embed)
  
    }
//#endregion

}   
    

module.exports.help = {
    aliases: ['yt'],
    name: 'youtube',
    description: 'Comandos sobre o YouTube.',
    usage: '+money @membro'
}
// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Diversão', /* You can make a category help command with this. */
    exclusiveTo: ''
}