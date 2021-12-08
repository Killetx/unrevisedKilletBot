module.exports = {
    name: 'i',
    description: "displays a player's inventory",
    execute(message, args) {
        if(message.mentions.users.size){
            const tagged = message.mentions.users.first();
            if(!fs.existsSync(tagged.id + ".txt")) return message.channel.send("This person doesn't have a character!!!");
            var itemlist1 = fs.readFileSync(tagged.id + "items.txt", 'utf8');;
            var item1 = itemlist1.split(',')
            var newitem1 = item1;
            var finishedmsg1 = "```" + tagged.username + "'s INVENTORY:\n";
            while (newitem1[0]) {
                var count1 = 1
                var temp1 = newitem1[0];
                newitem1.splice(0, 1);
                var tempindex1 = newitem1.indexOf(temp1);
                while(tempindex1 >= 0) {
                    tempindex1 = newitem1.indexOf(temp1);
                    newitem1.splice(tempindex1, 1);
                    count1 += 1;
                    tempindex1 = newitem1.indexOf(temp1);
                }
                finishedmsg1 = finishedmsg1 + temp1 + " x" + count1 + "      "
            }
            message.channel.send(finishedmsg1 + "```");
            return; 
        }
        if (!fs.existsSync(message.author.id + ".txt")) return message.channel.send("You dont have a character!!!!!");
        var itemlist = fs.readFileSync(message.author.id + "items.txt", 'utf8');
        var item = itemlist.split(',');
        var newitem = item;
        var finishedmsg = "```YOUR INVENTORY:\n";
        while (newitem[0]) {
            var count = 1
            var temp = newitem[0];
            newitem.splice(0, 1);
            var tempindex = newitem.indexOf(temp);
            while(tempindex >= 0) {
                tempindex = newitem.indexOf(temp);
                newitem.splice(tempindex, 1);
                count += 1;
                tempindex = newitem.indexOf(temp);
            }
            finishedmsg = finishedmsg + temp + " x" + count + "      "
        }
        message.channel.send(finishedmsg + "```");
        
    },
}