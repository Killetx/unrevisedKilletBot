fs = require('fs');
const items = require('./items/items.js');
module.exports = {
    name: 'use',
    description: 'allows you to use an item from within the game',
    
    execute(message, args) {
        var itemname = args[1]
        if(fs.existsSync(message.author.id + ".txt")) {
            if(itemname) {
                var itemlist = fs.readFileSync(message.author.id + "items.txt", 'utf8');
                var item = itemlist.split(',');
                
                itemposition = item.indexOf(args[1]);
                if(itemposition >= 0) {
                    items.execute(message, args, item, itemposition, itemname)
                } else {
                    message.channel.send("Sorry! You don't have anymore of this item!")
                }
            } else {
                message.channel.send("**You need to specify what Item to use!!!**")
            } 
        } else {
            message.channel.send("You must create a character first!!! **>>create** to make your character!")
        }



    }
}