import inquirer from "inquirer"


// const randomNumber = 17

// const answers = await inquirer.prompt([
//     {
//         name: "userGuessNumber",
//         type: "number",
//         message: "Please guess a number: ",
//     }
// ])

// console.log(answers);

// if(answers.userGuessNumber === randomNumber){
//       console.log("Congratulations! you guessed right number.");
      
// }else {
//     console.log("You guess wrong number");
    
// }


const randomNumber = Math.floor(Math.random() * 10 + 1)


const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1 - 10 ",
    },
])

if(answers.userGuessNumber === randomNumber){
      console.log("Congratulations! you guessed right number.");
      
}else {
    console.log("You guess wrong number");
    
}

