const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Central de comandos `)
    .setDescription(`aperte em uma reação pra ver comandos de 1️⃣  moderação, 2️⃣ diversão, 3️⃣ informação, 4️⃣ utils`)
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
        .setDescription(`m!ban
        Para banir algum usuário!
        
        m!kick
        Para expulsar algum usuário!
        
        m!clear
        Para apagar mensagens!
        
        m!lock
        Para bloquar algum canal!
        
        m!unlock
        Para desbloquear algum canal que esteja bloqueado!
        
        m!nickname
        Para mudar o apelido de um usuário no servidor!
        
        m!resetar
        Para resetar o apelido dado a algum usuário no servidor!
        
        m!sorteio
        Para sortear algo no servidor!`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })

      coletor2.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de diversão`)
        .setDescription(`m!kiss
      Para beijar um usuário!

      m!atacar
      Para atacar um usuário!

      m!tapa
      Para dar um tapa em um usuário!

      m!coinflip
      Escolha entre cara ou coroa e tente a sorte!
      
      m!say
      Para eu falar algo!
      
      m!abraço
      Para abraçar um usuário!
      
      m!cafuné
      Para fazer cafuné em um usuário!
      
      m!daily
      Colete seu prêmio diário!
      
      m!trabalhar
      Trabalhe a cada 30 minutos para receber dinheiro!
      
      m!pay
      Para doar dinheiro a um membro!
      
      m!depositar
      Para depositar seu dinheiro ao banco!
      
      m!sacar
      Para sacar seu dinheiro do banco!`)
      .setColor("RANDOM")
        
        msg.edit(embed)
      })
      coletor3.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de informação`)
        .setDescription(`m!serverinfo
        Para ver as informações do servidor que foi utilizado o comando!
        
        m!userinfo
        Para ver as informações do usuário mencionado!
        
        m!botinfo
        Para ver minhas informações!`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })

      coletor4.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de utils`)
        .setDescription(`m!idéia
        Para dar uma idéia de comando para mim
        
        m!avatar
        Para ver seu avatar!
        
        m!clima
        Para ver o clima das cidades!
        
        m!ping
        Para ver o ping do bot e seu ping!`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })
    })
  }
