function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}
function removeArray(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}
const empresas = [
    "Rocksun Games",
    "Jubisoft",
    "Eletronic Loot Boxes",
    "Ninvento",
    "Legendary Games",
    "Sego",
    "DVD Projekt Blue",
    "Naughty Cat",
    "Capscom",
    "Cube Enix",
    "Mojegg",
    "Cony",
    "Minisoft",
    "Valvi",
]
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
    "peito",
]

const temas = [
    "Ação",
    "Aventura",
    "RPG",
    "Simulação",
    "Sobrevivência",
    "Estratégia",
    "Sandbox",
    "Terror",
    "FPS",
    "MMORPG"
]
const types = [
    "Console",
    "console",
    "Jogo",
    "jogo"
]
var SI_SYMBOL = ["", "K", "Mi", "Bi", "T", "Quad", "Qui", "Ss", "Sep", "Oc", "N", "De"];
const ms = require("parse-ms")
function RandomArray(arrName) {
    return arrName[Math.floor(Math.random() * arrName.length)]
}
const arr = [
    "Roubar o nome do jogo dela",
    "Copiar mecânicas de jogo dela",
    "Roubar itens do jogo dela",
    "Imitar o estilo de jogo",
    "Usar as mesmas músicas dos jogos dela",
] 

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
    const userMoney = db.get(`${user.id}.dinheiro`)
    if (!db.get(`${user.id}.itens`).includes("Empresa")) return message.channel.send(`${message.author} ➤ Você não é CEO de nenhuma empresa!\nCompre uma na loja, e venda seus jogos!`)
    
    const arg1 = args[0]
    const arg2 = args[1]
    const arg3 = args[2]
    const arg4 = args[3]
    const arg5 = args[4]
    const empresaNome = db.get(`${user.id}.ename`)
    const empresaJogos = db.get(`${user.id}.ejogos`)
    const empresaDinheiro = db.get(`${user.id}.emoney`)
    const empresaFans = db.get(`${user.id}.efans`)
    const empresaConsoles = db.get(`${user.id}.econsoles`)
    const empresaTodosJogos = db.get(`Game_${user.id}`)
    const azar = RandomRange(0, 15000)

    if (empresaNome == null) db.set(`${user.id}.ename`, `Empresa sem Nome`)
    if (empresaDinheiro == null) db.set(`${user.id}.emoney`, 0)
    if (empresaFans == null) db.set(`${user.id}.efans`, 0)
    if (empresaTodosJogos == null) db.set(`${user.id}.etodosjogos`, [{}])
    if (arg1 === 'empresaname' || arg1 === 'renameempresa' || arg1 === 'rename') {
        if (!arg2) return message.channel.send(`${message.author} ➤ Você precisa dizer qual é o nome que você quer pôr na sua empresa! 📝`)
        for(let i = 0; i < blacklist.length; i++) {
            if (message.content.toLowerCase().includes(blacklist[i])) {
                return message.channel.send(`${message.author} ➤ Não use palavras inapropriadas no nome da sua empresa!`)
            }
        }

        db.set(`${user.id}.ename`, `${args.slice(1).join(" ")}`)
        return message.channel.send(`${message.author} ➤ O nome da sua Empresa de Jogos foi alterada para \`${args.slice(1).join(" ")}\` com sucesso! <:correct:659543887416786956>`)
    }

    if (arg1 === 'empresainfo' || arg1 === 'info') {
        const member = message.mentions.users.first() || client.users.get(arg2) || message.author

        const CempresaNome = db.get(`${member.id}.ename`)
        const CempresaJogos = db.get(`${member.id}.ejogos`)
        const CempresaDinheiro = db.get(`${member.id}.emoney`)
        const CempresaFans = db.get(`${member.id}.efans`)
        const CempresaTodosJogos = db.get(`LastGame_${member.id}`)
        const CempresaTodosConsoles = db.get(`LastConsole_${member.id}`)
        const CempresaConsoles = db.get(`${member.id}.econsoles`)
        if (CempresaConsoles == null) db.set(`${member.id}.econsoles`, 0)
        if (CempresaNome == null) db.set(`${member.id}.ename`, `Empresa do(a) ${member.username}`)
        if (CempresaDinheiro == null) db.set(`${member.id}.emoney`, 0)
        if (CempresaFans == null) db.set(`${member.id}.efans`, 0)
        if (CempresaJogos == null) db.set(`${member.id}.ejogos`, 0)

        const emb = new RichEmbed()
            emb.setThumbnail("https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/400px-P_videogame_controller.svg_.png?itok=qNUsusmF")
            if (CempresaNome != null) {
                emb.setTitle(`🎮 Informações da Empresa\n${CempresaNome}`)
            } else {
                emb.setTitle(`🎮 Informações da Empresa\nEmpresa do(a) ${member.username}`)
            }
            emb.setColor("RANDOM")
            emb.addField(`👤 CEO`, `\`${member.username}#${member.discriminator}\``, true)
            if (CempresaJogos != null) {
                emb.addField(`🔢 Jogos`, CempresaJogos.toLocaleString("pt-BR"), true)
            } else {
                emb.addField(`🔢 Jogos`, '0', true)
            }
            if (CempresaConsoles != null) {
                emb.addField(`<:console:661315434296901662> Consoles Criados`, CempresaConsoles, true)
            } else {
                emb.addField(`<:console:661315434296901662> Consoles Criados`, "0", true)
            }

            if (CempresaDinheiro != null) {
                emb.addField(`💸 Dinheiro Ganho`, CempresaDinheiro.toLocaleString("pt-BR"), true)
            } else {
                emb.addField(`💸 Dinheiro Ganho`, '0', true)
            }
            if (CempresaFans != null && CempresaFans >= 0) {
                emb.addField(`😀 Fãs`, CempresaFans.toLocaleString("pt-BR"))
            } else if (CempresaFans == null){
                emb.addField(`😀 Fãs`, '0')
            } else if (CempresaFans < 0 && CempresaFans !== null ) {
                emb.addField(`😡 Haters`, CempresaFans.toLocaleString("pt-BR"))
            }
            if (CempresaTodosJogos == null) {
                emb.addField(`📈 Último Jogo `, '*Nenhum Jogo*', true)
            } else {
                emb.addField(`📈 Último Jogo `, `**- Nome:** ${CempresaTodosJogos.nome}\n**- Nota:** ${CempresaTodosJogos.nota}\n**- Gênero:** ${CempresaTodosJogos.genero}\n**- Vendas:** ${CempresaTodosJogos.vendas.toLocaleString("pt-BR")}`, true)
            }

            if (CempresaTodosConsoles == null) {
                emb.addField(`📊 Último Console`, '*Nenhum Console*', true)
            } else {
                emb.addField(`📊 Último Console`, `**- Nome:** ${CempresaTodosConsoles.nome}\n**- Vendas:** ${CempresaTodosConsoles.vendas.toLocaleString("pt-BR")}\n**- Qualidade:** ${CempresaTodosConsoles.qualidade}\n**- Investimento** ${CempresaTodosConsoles.tec}`, true)
            }

            emb.setTimestamp()
        message.channel.send(emb)
        return
    }

    if (arg1 === 'desenvolver' || arg1 === 'criar') {
        if (empresaNome == null) db.set(`${message.author.id}.ename`, "Empresa sem Nome")
        if (!arg2) return message.channel.send(`${message.author} ➤ Você precisa dizer o que quer criar!\nForma de usar o comando: \`${prefix}emp criar [console/jogo]\``)
        if (!types.includes(arg2))  return message.channel.send(`${message.author} ➤ Você parece ter usado este comando da forma errada!\nForma correta de usar o comando: \`${prefix}emp criar [console/jogo]\``)
        if (arg2.toLowerCase() == "jogo") {
                let gCooldown = (600000*2.4)
                let lastDaily = await db.fetch(`LastGam_${user.id}`)
                if (lastDaily !== null && gCooldown - (Date.now() - lastDaily) > 0) {
                    let timeObj = ms(gCooldown - (Date.now() - lastDaily) )
                    return message.channel.send(`${message.author} ➤ Você já lançou um jogo recentemente! ⏳ \n**Tente de novo em:** \`${timeObj.minutes} minuto(s) e ${timeObj.seconds} segundo(s)\`! `)
                } else {
                    let genero = "nada"
                    const gameName = args.slice(3).join(" ")
                    if (!arg3) return message.channel.send(`${message.author} ➤ Você precisa dizer qual é o gênero do jogo que você quer fazer!\nGenêros disponíveis: \`Ação, Aventura, RPG, MMORPG, Simulação, Estratégia, Sobrevivência, Sandbox, FPS, Terror\``)
                    if (!arg4) return message.channel.send(`${message.author} ➤ Você precisa dizer o nome do seu jogo!`)
                    for (let i = 0; i < temas.length; i++) {
                        if (arg3.toLowerCase() === temas[i].toLowerCase()) {
                            genero = temas[i]
                        }
                    }

                    if (genero == 'nada') return message.channel.send(`${message.author} ➤ Você precisa dizer um gênero válido!\nGenêros disponíveis: \`Ação, Aventura, RPG, MMORPG, Simulação, Estratégia, Sobrevivência, Sandbox, FPS, Terror\``)

                    if (azar > 14980) {
                        let f = Math.round(empresaFans/2)
                        let m = Math.round(userMoney/2)
                        db.subtract(`${message.author.id}.dinheiro`, m)
                        db.subtract(`${message.author.id}.efans`, f)
                        return message.channel.send(`${message.author} ➤ Sua empresa foi processada pela empresa \`${RandomArray(empresas)}\` por: \`${RandomArray(arr)}\`\n> Você perdeu metade do seu dinheiro e fãs. <:pepised:660880776631418891>`)
                    }
                    db.set(`LastGam_${user.id}`, Date.now())
                    let sells = 0
                    let NewFans = 0
                    let mte = 0
                    let gamePrice = RandomRange(1, 10)
                    let gameNota = RandomRange(0, 100)
                    if (db.get(`${user.id}.itens`).includes(`Game Engine Profissional`)) gameNota += RandomRange(5, 35)
                    let jogoBom = RandomRange(0, 50)
                    if (jogoBom < 25) gameNota -= RandomRange(15, 25)
                    else if (jogoBom > 25) gameNota += RandomRange(20, 35)
                    else if (jogoBom == 25) gameNota += RandomRange(35, 45)
                    if (gameNota > 100) gameNota = 100
                    else if (gameNota < 1) gameNota = 0

                    sells = Math.round((empresaFans * (gameNota+1))/RandomRange(1, 2))

                    sells = Math.round(sells)
                    if (gameNota > 45 && gameNota < 95) NewFans = (sells / 10)
                    else if (gameNota >= 95) NewFans = (sells / 5)
                    else if (gameNota < 45 && gameNota > 10) NewFans = -(sells / 15)
                    else if (gameNota == 45) NewFans = 0
                    else if (gameNota <= 10) NewFans = -(sells / 5)
                    if (empresaFans < 13) {
                        NewFans = Math.round(RandomRange(1, 13))
                        sells = RandomRange(5, 50)
                    }
                    if (empresaFans > 150000) {
                        sells = sells / 10
                        NewFans = NewFans / 30
                    }
                    if (empresaFans > 1000000) {
                        sells = sells / 20
                        NewFans = NewFans / 70
                    }
                    mte = Math.round(((sells * gamePrice) / 4))
                    if (mte > 500000) mte = Math.round(mte / 2)
                    NewFans = Math.round(NewFans)
                    if (gameNota >= 91 && gameNota < 99) {
                        NewFans = Math.round(NewFans*2)
                        sells = Math.round(sells*2)
                        mte = Math.round(((sells * gamePrice) / 4.2))
                    }
                    if (gameNota >= 99) {
                        NewFans = Math.round(NewFans*3)
                        sells = Math.round(sells*3)
                        mte = Math.round(((sells * gamePrice) / 4.3))
                    }
                    db.add(`${user.id}.efans`, NewFans)
                    const emb = new RichEmbed()
                        .setTitle("✅ Jogo Lançado!")
                        .setThumbnail("https://svgsilh.com/png-1024/1784571.png")
                        .setTimestamp()
                        .setFooter(`Desenvolvido por: ${empresaNome}`)
                        .addField(`🎮 Nome do Jogo`, `\`${gameName}\``, true)
                    if (gameNota > 70) {
                        emb.addField(`<:online:650151292362293258> Nota`, gameNota, true)
                    } else if (gameNota > 40 && gameNota <= 70) {
                        emb.addField(`<:afk:650148584427225098> Nota`, gameNota, true)
                    } else if (gameNota <= 40) {
                        emb.addField(`<:dnd:650150925138264065> Nota`, gameNota, true)
                    }
                        emb.addField(`🌀 Genêro do Jogo`, genero, true)
                        emb.addField(`📊 Vendas`, sells.toLocaleString("pt-BR"), true)
                        if (NewFans < 0) {
                            emb.addField(`👤 Fãs Perdidos`, "🔴 " + (NewFans * -1).toLocaleString("pt-BR"), true)
                        } else {
                            emb.addField(`👤 Novos Fãs`, "🟢 " + NewFans.toLocaleString("pt-BR"), true)
                        }
                        emb.addField(`💸 Preço do Jogo`, `\`${gamePrice} Reals\``)
                        emb.addField(`💶 Dinheiro Ganho`, `\`${mte.toLocaleString("pt-BR")} Reals\``, true)
                    

                    message.channel.send(emb)
                    db.set(`LastGam_${message.author.id}`, Date.now())
                    db.add(`${user.id}.dinheiro`, mte)
                    db.add(`${user.id}.ejogos`, 1)
                    db.add(`${user.id}.emoney`, mte)
                    db.push(`${user.id}.etodosjogos`, {id: empresaJogos, moneyEarned: mte, nome: `${args.slice(2).join(" ")}`, novosFans: NewFans, nota: gameNota, genero: genero, fans: NewFans, vendas: sells, preco: gamePrice, empresa: empresaNome})
                    if (db.get(`LastGame_${message.author.id}`) == null) {
                        db.set(`LastGame_${message.author.id}`, {id: empresaJogos, moneyEarned: mte, nome: `${args.slice(3).join(" ")}`, novosFans: NewFans, nota: gameNota, genero: genero, fans: NewFans, vendas: sells, preco: gamePrice, empresa: empresaNome})
                    } else {
                        db.set(`LastGame_${message.author.id}`, {id: empresaJogos, moneyEarned: mte, nome: `${args.slice(3).join(" ")}`, novosFans: NewFans, nota: gameNota, genero: genero, fans: NewFans, vendas: sells, preco: gamePrice, empresa: empresaNome})
                    }
                }
        } else if (arg2.toLowerCase() == 'console') {
            let cCooldown = 3000000
            let lastDaily = await db.fetch(`LastCons_${user.id}`)
            if (lastDaily !== null && cCooldown - (Date.now() - lastDaily) > 0) {
                let timeObj = ms(cCooldown - (Date.now() - lastDaily) )
                    return message.channel.send(`${message.author} ➤ Você já lançou um console recentemente! ⏳ \n**Tente de novo em:** \`${timeObj.minutes} minuto(s) e ${timeObj.seconds} segundo(s)\`! `)
            } else {
                if (!arg3) return message.channel.send(`❌ ➤ ${message.author} Você precisa dizer quanto investimento você pretende usar no Console! (Número de 1 a 100)`)
                let tec = arg3
                if (!arg4) return message.channel.send(`❌ ➤ ${message.author} Você precisa dizer qual é o nome do console!`)
                let consoleName = args.slice(3).join(" ")
                if (isNaN(tec)) return message.channel.send(`❌ ➤ ${message.author} Número inválido de investimento!`)
                if (tec < 1 || tec > 100)  return message.channel.send(`❌ ➤ ${message.author} O investimento precisa ser entre 1 e 100!`)
                
                let priceToCreate = Math.round(((tec) * 800000))
                if (userMoney < priceToCreate) return message.channel.send(`💸 ➤ ${message.author} Você precisa de mais \`${(Math.round(priceToCreate - userMoney)).toLocaleString("pt-BR")} Reals\` para conseguir criar um console com \`${tec.toLocaleString("pt-BR")}\` de investimento!`)
                let price = RandomRange(100, 1200)
                let quality = Math.round(RandomRange(tec/2, tec*110/30))
                let sells = Math.round(RandomRange(tec*32000, tec*150000))
                let ToEarn = Math.round(RandomRange((sells*price/70), (sells*price/7)))
                let newfans = Math.round((RandomRange(sells/350, sells/500)) )

                db.subtract(`${message.author.id}.dinheiro`, priceToCreate)
                const con = new RichEmbed()
                    .setTitle("💻 Console Criado!")
                    .addField(`📝 Nome do Console`, `\`${consoleName}\``, true)
                    .addField(`🌀 Qualidade do Console`, quality.toLocaleString("pt-BR"), true)
                    .addField(`<:monetizacao:653991061676621825> Preço do Console`, price + " Reals", true)
                    .addField(`📊 Vendas`, `${sells.toLocaleString("pt-BR")}`, true)
                    .addField(`💶 Dinheiro Ganho`, `\`${ToEarn.toLocaleString("pt-BR")} Reals\``, true)
                    .addField(`👤 Novos Fãs`, `\`${newfans.toLocaleString("pt-BR")}\``, true)
                    .addField(`💸 Gasto Total`, `\`${priceToCreate.toLocaleString("pt-BR")} Reals\``)
                    .setThumbnail("https://clipart4biz.com/images/controller-drawing-super-nintendo-4.png")
                    .setColor("RANDOM")
                    .setTimestamp()
                    .setFooter("Console criado por " + empresaNome)

                message.channel.send(con)
                db.set(`LastCons_${user.id}`, Date.now())
                db.add(`${message.author.id}.dinheiro`, ToEarn)
                db.add(`${message.author.id}.efans`, newfans)
                db.add(`${message.author.id}.econsoles`, 1)
                db.add(`${message.author.id}.emoney`, 1)
                db.set(`LastConsole_${message.author.id}`, {nome: consoleName, vendas: sells, dinheiroGanho: ToEarn, novosFans: newfans, precoTotal: priceToCreate, qualidade: quality, tec: tec})
            }
        }   
    }

    if (arg1 === 'ajuda' || arg1 === 'help') {
        const helpembed = new RichEmbed()
            .setTitle(`Comandos de Empresas`)
            .addField(`**${prefix}empresa info**`, `*Quer saber informações sobre alguma empresa?*`, true)
            .addField(`**${prefix}empresa criar**`, `*Crie e publique um jogo!*`, true)
            .addField(`**${prefix}empresa rename**`, `*Muda o nome da sua empresa*`, true)
            .addField(`**${prefix}empresa vender**`, `*Venda sua empresa!*`, true)
        message.author.send(helpembed)
        return message.channel.send(`${message.author} ➤ Enviei o help no seu privado! __(Se não recebeu, verifique se seu privado está aberto)__`)
    }

    if (arg1 === 'vender' || arg1 === 'sell') {
        const userItens = db.get(`${message.author.id}.itens`)
        let toEarn = Math.round(((500000 + (empresaFans)) / 2.7))
        if (toEarn < 50000) toEarn = 50000
        message.channel.send(`${message.author} ➤ Você vendeu sua Empresa!\nLucro adquirido com a venda: \`${toEarn.toLocaleString("pt-BR")} Reals\` 💶`)
        let nI = removeArray(userItens, "Empresa")
        db.set(`${message.author.id}.itens`, nI)
        db.add(`${message.author.id}.dinheiro`, toEarn)

        db.set(`${message.author.id}.emoney`, 0)
        db.set(`${message.author.id}.efans`, 0)
        db.set(`${message.author.id}.econsoles`, 0)
        db.set(`${message.author.id}.ejogos`, 0)
        db.set(`${message.author.id}.ename`, `Empresa sem Nome`)
        db.set(`${message.author.id}.etodosjogos`, null)
        db.set(`LastGame_${message.author.id}`, null)
        db.set(`LastConsole_${message.author.id}`, null)
    }
}
module.exports.help = {
    aliases: ['emp'],
    name: 'empresa',
    description: 'Comandos sobre empresas.',
    usage: '+empresa [comando] [comando secundário]'
}
// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Diversão', /* You can make a category help command with this. */
    exclusiveTo: ''
}