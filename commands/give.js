module.exports = {
    name: 'give',
    description: 'a command for administrators to give players items',
    execute(message, args) {
        if(message.author.id == "337330947026583553" || message.author.id == "434881411724607488" || message.author.id == "501140153427820544") { 
            if(!message.mentions.users.size) return message.channel.send("You need to mention someone in order to use this command!!!")
            const tagged = message.mentions.users.first();
            if(!fs.existsSync(tagged.id + ".txt")) return message.channel.send("This person doesn't have a character!!!");
            if(args[3]) {
                var temp = args[2]
                while (temp > 0) {
                    fs.appendFileSync(tagged.id + "items.txt", "," + args[3])
                    temp = temp - 1;

                }
                message.channel.send("Successfully added " + args[2] + "x" + args[3]);
                return;
            }
            if(args[2]) {
                fs.appendFileSync(tagged.id + "items.txt", "," + args[2])
                message.channel.send("Successfully added 1x" + args[2]);
            }else{
                return message.channel.send("invalid args.");
            }   
        } else {
            message.channel.send("sorry kid, admins only :sunglasses:  ");
        }
    },
}