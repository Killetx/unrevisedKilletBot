//TAPS INTO NODE.JS'S FILE SYSTEM
const fs = require('fs');
//LISTS TEH CURRENT RACES AND CLASSES FOR FUTURE REFRENCE
const races = ["human"]
const classes = ["warrior"]
var x = 1
var y = 1
var gridBorderY = 4
var gridBorderX = 4
var startPointX = gridBorderX / 2
var startPointY = gridBorderY / 2
var startPoint = startPointX + "," + startPointY + "|"
//WHAT IS ACTUALLY CALLED ON WHEN THE COMMAND IS EXECUTED
module.exports = {
    //NAME AND DESCRIPTION OF THE COMMAND FOR USE IN THE FUTURE DYNAMIC HELP COMMAND
    name: 'create',
    description: 'Creates an adventurer for you to start your journey!',
    //ACTUAL CODE
    execute(message, args) {
        //CHECKS TO SEE IF IT HAS THE RIGHT AMOUNT OF PARAMETERS
        if(args[3]) {
            //IF IT DOES, THEN IT CHECKS IF THE USER ALREADY HAS A CHARACTER OR NOT BY CHECKING FOR THAT FILE
            if (fs.existsSync(message.author.id + ".txt")) {
                //IF THE USER HAS A CHARACTER, THEN IT WILL SIMPLY TELL THEM THERE IS NO NEED TO CREATE ANOTHER.
                message.channel.send("Your character is still alive! There's no need to create a new character!")
            }else {
                //IF THE USER DOESN'T HAVE A CHARACTER, THEN IT CHECKS TO SEE IF THEIR PARAMETERS ARE CORRECT, REFERING BACK TO THE FORE-MENTIONED CLASSES AND REACES ARRAYS
                if (args[2] != races) {
                    message.channel.send("Invalid Race! >>create for help!")
                    return; //IF THERE IS AN INVALID RACE, THEN IT STOPS THE EXECUTION
                }
                if (args[3] != classes) {
                    message.channel.send("Invalid Class! >>create for help!")
                    return; //IF THERE IS A INVALID CLASS, THEN IT STOPS THE EXECUTION
                }
                // IF ALL CONDITIONS ARE MET THEN IT CREATES NEW FILES CONTAINING THE PARAMETERS OUTLINED BY THE USERS TO LATER BE REFRENCED BY THE BOT 
                fs.writeFileSync(message.author.id + "info.txt", "ID: " + message.author.id + "\nName: " + args[1] + "\nRace: " + args[2] + "\nClass: " + args[3] + "\n");
                fs.writeFileSync(message.author.id + ".txt", args[1] + "\n" + args[2] + "\n" + args[3] + "\n" + startPoint);
                fs.writeFileSync(message.author.id + "maxhp.txt", "30");
                fs.writeFileSync(message.author.id + "hp.txt", "30");
                fs.writeFileSync(message.author.id + "items.txt", "potion,fists");
                //  switch (args[2]) {
              //      case 
              //  }

                // while(x != 101) {
                //     while(y != 100) {
                //         y += 1
                //         fs.appendFileSync(message.author.id + "grid.txt", x + "," + y + "|");
                //     }
                //     x +=1
                //     y = 0
                //     fs.appendFileSync(message.author.id + "grid.txt", "\n")
                // }

                //AFTER FILE CREATEION IT LETS THE USER KNOW THAT THE CHARACTER HAS BEEN SUCCESSFULLY CREATED
                message.channel.send("Character " + args[1] + " created!");
                //AFTER LETTING THE USER KNOW IT LETS THE DEVELOPER KNOW THAT SOMEONE USED THE BOT TO CREATE A CHARACTER
                console.log("created char for " + message.author.tag);
            }
            
        } else {
            //IF THERE ISN'T A VALID AMOUNT OF ARGUMENTS THEN IT RETURNS
            message.channel.send("Invalid arguments!!!! :hushed:\n----------------------------- \nTo create a character you need to specify it's race, class, & name!\n-----------------------------\nUSAGE:\n```>>create *name* *race* *class*```\nAvailible Races: Human (more to come soon)\nAvailible classes: Warrior (more to come soon)")
        }
    }
}