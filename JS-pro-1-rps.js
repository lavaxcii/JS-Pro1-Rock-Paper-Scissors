let PC = 0;
let NPC = 0;

let varPC = function playerChoice() {
  let rps = window.prompt('Enter rock, paper or scissor:');
  return rps.toLowerCase();
};

let varNPC = function computerChoice() {
  let rng = Math.floor(Math.random() * 3) + 0;
  let rps = ['rock', 'paper', 'scissor'];
  let choice = rps[rng];
  return choice;
};

function game(numberOfRounds) {

  function round(choicePC, choiceNPC) {
    if (choicePC === choiceNPC) {
      console.log(`Player chose ${choicePC}`);
      console.log(`Computer chose ${choiceNPC}`);
      PC += 1;
      NPC += 1;
      console.log('DRAW!');
      return console.log(`Player score is ${PC}, Computer score is ${NPC}.`);
    } else if (choicePC === 'rock' && choiceNPC === 'paper') {
      console.log(`Player chose ${choicePC}`);
      console.log(`Computer chose ${choiceNPC}`);
      NPC += 2;
      console.log('Computer wins! Rock is weak against paper.');
      return console.log(`Player score is ${PC}, Computer score is ${NPC}.`);
    } else if (choicePC === 'rock' && choiceNPC === 'scissor') {
      console.log(`Player chose ${choicePC}`);
      console.log(`Computer chose ${choiceNPC}`);
      PC += 2;
      console.log('Player wins! Rock is strong against scissor.');
      return console.log(`Player score is ${PC}, Computer score is ${NPC}.`);
    } else if (choicePC === 'paper' && choiceNPC === 'rock') {
      console.log(`Player chose ${choicePC}`);
      console.log(`Computer chose ${choiceNPC}`);
      PC += 2;
      console.log('Player wins! Rock is weak against paper.');
      return console.log(`Player score is ${PC}, Computer score is ${NPC}.`);
    } else if (choicePC === 'paper' && choiceNPC === 'scissor') {
      console.log(`Player chose ${choicePC}`);
      console.log(`Computer chose ${choiceNPC}`);
      NPC += 2;
      console.log('Computer wins! Scissor is strong against paper.');
      return console.log(`Player score is ${PC}, Computer score is ${NPC}.`);
    } else if (choicePC === 'scissor' && choiceNPC === 'paper') {
      console.log(`Player chose ${choicePC}`);
      console.log(`Computer chose ${choiceNPC}`);
      PC += 2;
      console.log('Player wins! Scissor is strong against paper.');
      return console.log(`Player score is ${PC}, Computer score is ${NPC}.`);
    } else if (choicePC === 'scissor' && choiceNPC === 'rock') {
      console.log(`Player chose ${choicePC}`);
      console.log(`Computer chose ${choiceNPC}`);
      NPC += 2;
      console.log('Computer wins! Scissor is weak against rock.');
      return console.log(`Player score is ${PC}, Computer score is ${NPC}.`);
    } else if (choicePC !== 'paper' || choicePC !== 'rock' || choicePC !== 'scissor') {
      console.log(`Invalid option typed:%c ${choicePC}!%cTry again.`, `color: red`);
      console.log(`--------------------------------------------`);
      round(varPC(), varNPC());
    }
  };

  for (let i = 1; i <= numberOfRounds; i++) {
    round(varPC(), varNPC());
    console.log(`--------------------------------------------`);
    if (i === numberOfRounds) {
      if (PC > NPC) {
        console.log(`Player WINS! (score: ${PC})`);
      } else if (PC < NPC) {
        console.log(`Computer WINS! (score: ${NPC})`);
      } else {
        console.log(`It's a DRAW! (score: ${NPC})`)
      };
    };
  };

};