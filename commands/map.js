module.exports = {
    name: 'map',
    description: 'displays a map of the surrounding area',
    execute(message, args) {
        var maxx = 3
        var maxy = 3
        if(args[1]) return;
        var info = fs.readFileSync(message.author.id + '.txt', 'utf8');
        var infolist = info.split('\n');
        var location = infolist[3];
        var locationxy = location.split('|');

        var locationxynonarray = locationxy[0]

        var locationxysplit = locationxynonarray.split(',');

        var x = locationxysplit[0]
        var y = parseInt(locationxysplit[1], 10);


        if(locationxysplit[0] == maxx) {
            var maxxb = true
        } else  var maxxb = false
        if(locationxysplit[1] == maxy) {
            var maxyb = true
        } else var maxyb = false
        if(locationxysplit[0] == 1) {
            var zerox = true
        } else var zerox = false
        if(locationxysplit[1] == 1) {
            var zeroy = true
        } else var zeroy = false
        var grid = fs.readFileSync('grid.txt', 'utf8');
        var gridsearch = grid.search('\r\n')
        while(gridsearch != -1) {
            grid = grid.replace('\r\n', '');
            gridsearch = grid.search('\r\n')
        }
        var tempmapbot =  x
        tempmapbot++
        var tempmaptop = x
        tempmaptop--
        var map1 = "| " + (tempmaptop) + ", " + (y - 1) + " | "
        var map2 = "" + (tempmaptop) + ", " + (y) + " | "
        var map3 = "" + (tempmaptop) + ", " + (y + 1) + " |"
        var map4 = "| " + (x) + ", " + (y - 1) + " | "
        var map5 = "" + (x) + ", " + y + " | ";  
        var map6 = "" + (x) + ", " + (y + 1) + " |"
        var map7 = "| " + (tempmapbot) + ", " + (y - 1) + " | "
        var map8 = "" + (tempmapbot) + ", " + (y) + " | "
        var map9 = "" + (tempmapbot) + ", " + (y + 1) + " |"
        if(zerox) {         
            map1 = "| -, - | "
            map2 = "-, - | "
            map3 = "-, - |"
        }
        if(zeroy) {
            map1 = "| -, - | "
            map4 = "| -, - | "
            map7 = "| -, - | "

        }
        if(maxxb) {
            map7 = "| -, - | "
            map8 = "-, - | "
            map9 = "-, - |"
        }
        if(maxyb) {
            map3 = "-, - |"
            map6 = "-, - |"
            map9 = "-, - |"
        }
        var map =  map1 + map2 + map3 + "\n----------------------\n" + map4 + map5 + map6 + "\n----------------------\n" + map7 + map8 + map9 
        message.channel.send('```YOUR CORDINATES ARE AS FOLLOWS:  X = ' + x + " | Y = " + y + "\n----------------------\n" + map + "\n----------------------```");
    }
}