const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Central de comandos`)
    .setDescription(`aperte em uma reação pra ver tal comandos 1️⃣  moderação, 2️⃣ diversão, 3️⃣ informação, 4️⃣ utils`)
    .setColor("RANDOM")
    
    message.channel.send(embed).then(msg => {
      msg.react("1️⃣")
      msg.react("2️⃣")
      msg.react("3️⃣")
      msg.react("4️⃣")

      let filtro1 = (r, u) => r.emoji.name === '1️⃣' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.name === '2️⃣' && u.id === message.author.id;
      let filtro3 = (r, u) => r.emoji.name === '3️⃣' && u.id === message.author.id;
      let filtro4 = (r, u) => r.emoji.name === '4️⃣' && u.id === message.author.id;

      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);
      let coletor3 = msg.createReactionCollector(filtro3);
      let coletor4 = msg.createReactionCollector(filtro4);

      coletor.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de moderação`)
        .setDescription(`ban
        Para banir algum usuário!
        
        kick
        Para expulsar algum usuário!`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })

      coletor2.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de diversão`)
        .setDescription(`kiss
      Para beijar um usuário!
      
      say
      Para eu falar algo`)
        .setColor("RANDOM")

        msg.edit(embed)
      })

      coletor3.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de informação`)
        .setDescription(``)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })

      coletor4.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de utils`)
        .setDescription(`m!clear
        Para apagar mensagens
        
        m!idéia
        Para dar uma idéia de comando para mim
        
        m!avatar
        Para ver seu avatar!`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })
    })
  }
