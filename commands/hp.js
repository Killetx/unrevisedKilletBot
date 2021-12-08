module.exports = {
    name: 'hp',
    description: "displays a player's HP",
    execute(message, args) {
        if(message.mentions.users.size){

            const tagged = message.mentions.users.first();
            if(!fs.existsSync(tagged.id + ".txt")) return message.channel.send("This person doesn't have a character!!!");
            var hp1 =  fs.readFileSync(tagged.id + "hp.txt");
            var maxhp1 = fs.readFileSync(tagged.id + "maxhp.txt");
            message.channel.send(hp1 + "/" + maxhp1);
            return;
        }
        if (!fs.existsSync(message.author.id + ".txt")) return message.channel.send("You dont have a character!!!!!");
        var hp =  fs.readFileSync(message.author.id + "hp.txt");
        var maxhp = fs.readFileSync(message.author.id + "maxhp.txt");
        message.channel.send(hp + "/" + maxhp)
    }
}