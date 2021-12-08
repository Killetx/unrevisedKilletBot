//ALL OF THE FOLLOWING WITHIN THE BORDER OF THE "-" WALL IS SIMPLY DECLARING CONSTANTS THAT ARE NECESSARY FOR THE BOT TO OPERATE
//-------------------------------------------------------------------------------------------------------------------------------
//NODE.JS FILE SYSTEM
const fs = require('fs');
var xlsx = require('node-xlsx').default;
//WHAT ALLOWS THE BOT TO LOG IN

const Discord = require("discord.js");
//ESTABLISHES THE PREFIX ">>" IN THIS CASE | AND ESTABLISHES THE BOT'S TOKEN | ALSO GRABS THE AUTHOR AND VERSION FROM PACKAGE.JSON
const { prefix, token } = require('./botconfig.json');
const { author, version } = require('./package.json')
//ESTABLISHES THE DISCORD CLIENT SO THE BOT IS ABLE TO LOG IN
const client = new Discord.Client();
//ESTABLISHES COMMANDS VIA THE DISCORD COLLECTIONS
client.commands = new Discord.Collection();
// MAKES  A LIST OF EXISTING COMMAND FILES IN THE FILE LABELED "COMMANDS" IN THIS CASE IT'S JUST "HI.JS"
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
//--------------------------------------------------------------------------------------------------------------------------------
//ESTABLISHES A COMMAND NAME AND THE COMMAND OF EACH OF THE FILES LISTED IN THE COMMANDS FOLDER
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//ONCE THE BOT IS READY IT LOGS THE USER'S ID THAT IT IS LOGGED INTO
client.on("ready", async () => {
    console.log("KilletBot Online! Comments/Questions? Email KilletStarborn@gmail.com! \n Bot is running on user: " + client.user + "\n Coded by: " + author + "\n Version: " + version )
});

//ANY TIME A MESSAGE IS SENT INSIDE A SERVER THE BOT IS IN THIS IS EXECUTED (WILL FRY YOUR PC IF YOU'RE IN LARGE SERVERS AND LOTS OF THEM)
client.on("message", async message => {
    // if(message.author.id === "456662951622082561") {
    //     message.delete();
    //     return;
    // }
    if (message.content === ">botnet") {
        message.reply("what botnet xd")
    }

//ESTABLISHES CMDMSG AS ANY MESSAGE SENT
    var cmdmsg = message.content.toLowerCase();
    //CUTS THE BOT OFF EARLY IF THE MESSAGE DOESN'T START WITH >>
    if (!cmdmsg.startsWith(prefix)) return;
    if (!message.guild) {
     //   message.channel.send("Sorry! bot is only meant to be used in Servers!!! Not DMs!");
      //  return;
    }
    //SEPERATES EACH ARGUMENT AND THE INDIVIDUAL COMMAND
    const args = cmdmsg.split(/ +/);
    //LOGS EVERY COMMAND EXECUTED THAT STARTS WITH >>
    //THE TWO FOLLOWING LINES MAKES THE VARIABLE 'COMMAND' WHATEVER THE COMMAND IS WITHOUT THE PREFIX INVOLVED
    cmdmsg = cmdmsg.replace(prefix, '');
    var command = cmdmsg.split(" ");
    
    //IF THE COMMAND THAT A USER SENDS DOES NOT EXIST YET THEN IT WILL END THE CODE EARLY
    if (!client.commands.has(command[0])) return;
    //ON THE OTHER HAND, IF IT DOES, THEN IT WILL EXECUTE THE CODE LISTED WITHIN THE COMMAND, AND IF THERE IS AN ERROR, THE BOT SAYS TO THE USER THAT THERE WAS AN ERROR
    try {
        client.commands.get(command[0]).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command! (This bot was by killet btw <3)');
    }

})

//LOGS THE BOT IN
client.login(token);

