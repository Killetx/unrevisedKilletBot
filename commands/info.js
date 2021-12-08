module.exports = {
    name: 'info',
    description: 'provides a brief description of each item specified',
    execute (message, args) {
        if(!args[1]) return message.channel.send("Please provide an item!");
        switch(args[1]){
            case 'potion' :
            message.channel.send("```TYPE: Consumable\nITEM: Potion\nRARITY: Common\nUSE: Heals 10Hp when used```");
            break;
            case 'fists' :
            message.channel.send("```TYPE: Weapon\nITEM: Fists\nRARITY: Common\nUSE: Can be used to punch enemies and objects! (or yourself)```");
            break;
            default:
            message.channel.send("Sorry! This isn't an item yet!");
            break;
        }
    }
}