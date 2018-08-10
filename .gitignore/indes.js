const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "~";

client.login("NDc2ODQ4NjM5MTA1MzAyNTYw.Dk9NVw.wrkT1XMVj1_jkdIztwl_9GSKLYY");

client.on("ready", () => {
    console.log("Je suis prêt !");
    client.user.setGame("Designed by Laiwn ~help");
});

client.on('message', message => { 
    
    if(message.content === "Bonjour"){
        message.reply("Salut");
        console.log(`Le Bot dit bonjour`);
    }

    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#33FF00")
        .setTitle("Here are my commands !")
        .setDescription("Iam a bot for the security of Hades")
        .addField("~help", "Order of help !")
        .addField("~ip", "ip of hades practice")
        .addField("~discord", "Invitation For Join Hades")
        .setTitle("Modération")
        .addField("~kick")
        .addField("~ban")
        .addField("~clear")
        .setFooter("Help Menu By Laiwn")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a effectué la commande d'aide")
    }

    if(message.content.startsWith(prefix + "kick")) {
        
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send ("You d'ont have a Permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur")
        }

        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe")
        }

        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour kick");
        }

        kick.kick().then(member => {
            message.channel.send(`${member.user.username} est kick par ${message.author.username}`)
        });
    }

    if(message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la perm !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur !");
        }

        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe");
        }

        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour ban");
        }

        ban.ban().then(member => {
            message.channel.send(`${member.user.username} est ban par ${message.author.username}`)
        });
    };

    if(message.content.startsWith(prefix +"clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("Vous n'avez pas la permission");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Nombres de messages à supprimer ?")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]}messages delete`);
        })
    }

    if(message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");
 
        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');
        }
 
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
        }
 
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`${mute.user.username} est mute !`);
        })
    }

    if(message.content.startsWith(prefix + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");
 
        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');
        }
 
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
        }
 
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
            message.channel.send(`${mute.user.username} n'est plus mute `);
        })
    }

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ip":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()

        .setColor(990000)
        .setTitle(`IP : dev.hadespvp.eu`)
        message.reply("IP for join HadesPvP (look your private messsage)")
        message.author.send({embed: stats_embed});
        break;
    }

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

switch (args[0].toLowerCase()) {
    case "discord":

    var userCreateDate = message.author.createdAt.toString().split(" ");
    var msgauthor = message.author.id;

    var stats_embed = new Discord.RichEmbed()

    .setColor(990000)
    .setTitle(`Discord, invite your friends : https://discord.gg/UKmMX3g`)
    message.reply("Discord for join Hades (look your private messsage)")
    message.author.send({embed: stats_embed});
    break;

    }})
