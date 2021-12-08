
const items = require('./items/items.js');
module.exports = {
    name: 'punch',
    description: "uses fists",
    execute(message, args) {
        var itemlist = fs.readFileSync(message.author.id + "items.txt", 'utf8');
        var item = itemlist.split(',');
        
        itemposition = item.indexOf("fists");
        if(itemposition >= 0) {
            items.execute(message, args, item, itemposition, "fists")
        } else {
            message.channel.send("Sorry! You don't have anymore of this item!")
        }
    }
}