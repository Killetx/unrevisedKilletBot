const fs = require('fs');
module.exports = {
    execute(message, args, item, itemposition, itemname){
        hp =  fs.readFileSync(message.author.id + "hp.txt");
        maxhp = fs.readFileSync(message.author.id + "maxhp.txt");
        switch(itemname){
            case 'potion':
                var oldhp = hp
                item.splice(itemposition, 1);
                fs.writeFileSync(message.author.id + "items.txt", item);
                hp = Number(hp) + 10
                if(hp > maxhp) {
                    hp = maxhp
                }
                fs.writeFileSync(message.author.id + "hp.txt", hp);
                message.channel.send("Your health went from " + oldhp + "/" + maxhp + " to " + hp + "/" + maxhp + "! :heartpulse:"); 
            break;
            case 'fists':
                if(args[2]) {
                    switch (args[2]) {
                        case 'self':
                            message.channel.send(":fist: For some reason you hit yourself and lost 1 hp!");
                            hp = hp - 1
                            fs.writeFileSync(message.author.id + "hp.txt", hp);

                        break; 
                    
                        default:
                            message.channel.send("Invalid use of fists! You need to specify what to use your fists on! :fist:")
                        break;
                        
                    }
                } else{
                    switch (args[1]) {
                        case 'self':
                            message.channel.send(":fist: For some reason you hit yourself and lost 1 hp!");
                            hp = hp - 1
                            fs.writeFileSync(message.author.id + "hp.txt", hp);

                        break; 
                    
                        default:
                            message.channel.send("Invalid use of fists! You need to specify what to use your fists on! :fist:")
                        break;
                        
                    }
                }
            break;
            default:
                message.channel.send("You've got an invalid item!!!! How did you do that?????")
            break;
        }
        if(hp <= 0) {
            message.channel.send("You killed yourself..... :skull: Wow... Character deleted.");
            fs.unlinkSync(message.author.id + "info.txt");
            fs.unlinkSync(message.author.id + ".txt");
            fs.unlinkSync(message.author.id + "maxhp.txt");
            fs.unlinkSync(message.author.id + "hp.txt");
            fs.unlinkSync(message.author.id + "items.txt");
        }
    }
    
}

