#! usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random());
console.log(randomNumber * 5);
const answers = await inquirer.prompt([
    {
        name: "userGuessNmber",
        type: "number",
        message: "please guess a number between 1 to 5:",
    }
]);
if (answers.userGuessNmber == randomNumber) {
    console.log("Congratulations!you guess right no.");
}
else {
    console.log("You guessed wrong number,");
}
