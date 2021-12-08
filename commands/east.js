module.exports = {
    name: 'east',
    description: 'allows the player to move in the eastern direciton from their current location',
    execute(message, args) {

        var maxx = 3
        var maxy = 3
        var info = fs.readFileSync(message.author.id + '.txt', 'utf8');
        var infolist = info.split('\n');
        var location = infolist[3];
        var locationxy = location.split('|');
        var locationxynonarray = locationxy[0]
        var locationxysplit = locationxynonarray.split(',');
        var x = locationxysplit[0]
        var y = parseInt(locationxysplit[1], 10);
        if(y == maxy){
            message.channel.send("Sorry, but you can't go this way! Try >>map for directional help!");
            return;
        } else {
            y = y + 1
            infolist[3] = x + "," + y + "|";
            fs.writeFileSync(message.author.id + '.txt', infolist[0] + "\n" + infolist[1] + "\n" + infolist[2] + "\n" + infolist[3])
            message.channel.send("You've moved east!")
        }
    }
}