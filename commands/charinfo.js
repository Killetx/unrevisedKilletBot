//TAPS INTO NODE.JS'S FILE SYSTEM
const fs = require('fs')
module.exports = {
    //NAME OF THE COMMAND FOR USE IN DYNAMIC HELP COMMAND
    name: 'charinfo',
    //DESCRIPTION OF THE COMMAND FOR USE IN DYNAMIC HELP COMMAND
    description: 'displays information about your existing character',
    //ACTUAL CODE CALLED VIA INDEX.JS WHENEVER THE COMMAND IS SAID IN A CHAT
    execute(message, args) {
        if(message.mentions.users.size){

            const tagged = message.mentions.users.first();
            if(!fs.existsSync(tagged.id + ".txt")) return message.channel.send("This person doesn't have a character!!!");
            var info = fs.readFileSync(tagged.id + '.txt', 'utf8')
            var infolist = info.split('\n')
            //RELAYING THAT INFO TO THE USER
            hp =  fs.readFileSync(tagged.id + "hp.txt");
            maxhp = fs.readFileSync(tagged.id + "maxhp.txt");
            message.channel.send("```Name: " + infolist[0] + "\nRace: " + infolist[1] + "\nClass: " + infolist[2] + "\nHP: " + hp + "/" + maxhp + "```")
            return;
        }
        //THE IF STATEMENT HERE CHECKS IF THE USER WHO DID THE COMMAND HAS A CHARACTER OR NOT
        if (fs.existsSync(message.author.id + ".txt")) {
            //IF THE USER HAS A CHARACTER THEN IT READS THE FILE CREATED FOR THEIR CHARACTER & RELAYS HTAT INFO TO THE USER
            var info = fs.readFileSync(message.author.id + '.txt', 'utf8');
            var infolist = info.split('\n');
            //RELAYING THAT INFO TO THE USER
            hp =  fs.readFileSync(message.author.id + "hp.txt");
            maxhp = fs.readFileSync(message.author.id + "maxhp.txt");
            message.channel.send("```Name: " + infolist[0] + "\nRace: " + infolist[1] + "\nClass: " + infolist[2] + "\nHP: " + hp + "/" + maxhp + "\nLocation: " + infolist[3] + "```");
            
        } else {
            //IF THE USER DOESN'T HAVE A CHARACTER IT GIVES INFORMATION ON HOW TO CREATE A CHARACTER
            message.channel.send("Appears you don't have a character! Try >>create!")
        }
    },
}
