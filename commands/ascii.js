const figlet = require('figlet');

module.exports = {
    name: "ascii",
    description: "Converts text to ascii",

    async run (client, message, args){
        if(!args[0]) return message.channel.send('Escreva algum texto para eu transformá-lo em `ascii`');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Algo deu errado');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Forneça um texto com menos de 2.000 caracteres para eu transformá-lo em `ascii`')

            message.channel.send(' + data + ')
        })
    }
}
