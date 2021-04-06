const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(`Olá ${message.author}, Abaixo está uma listinha sobre mim:`)
    .setTimestamp()
    .setFooter(`Comando feito por: ${message.author.username}`)
    .addFields(
        {
            name: '🤖 Meu nome',
            value: `${client.user.tag}`,
            inline: true
        },
        {
            name: '🎪 Servidores:',
            value: `Estou em **${client.guilds.cache.size}** servidores.`,
            inline: true
        },
        {
            name: '🎩 Canais:',
            value: `Tenho **${client.channels.cache.size}** canais de texto.`,
            inline: true
        },
        {
            name: '👻 Usuários:',
            value: `São **${client.users.cache.size}** usuários.`,
            inline: true
        },
        {
            name: '⏳ Meu ping:',
            value: `**${Math.round(client.ws.ping)}** ms`,
            inline: true
        },
        {
            name: '🎎 Meus criadores:',
            value: 'Detetive Pikachu#4680',
            inline: true
        },
        {
            name: '🦁 Meu servidor:',
            value: 'https://discord.gg/qMJFC5VSM8',
            inline: true
        },
    )
    message.channel.send(embed);
}
