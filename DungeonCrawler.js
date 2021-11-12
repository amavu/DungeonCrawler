// Task 4.1 
const prompt = require('prompt');

prompt.start();
 
console.log('Hello, Crawler! You are about to go into the dungeon, please type: left, right, up or down to escape from the dungeon.');

getInput()

// Dungeon Crawler path
// oXXooo
// ooooXo
// XXXXXo
// ooooXo
// oXXooo
// oXXXXX
const dungeon = [
  [{ type: 'start' }, null, null, { type: 'path' }, { type: 'path' }, { type: 'path' }],
  [{ type: 'path' }, { type: 'path' }, { type: 'path' }, { type: 'path' }, null, { type: 'path' }],
  [null, null, null, null, null, { type: 'path' }],
  [{ type: 'path' }, { type: 'path' }, { type: 'path' }, { type: 'path' }, null, { type: 'path' }],
  [{ type: 'path' }, null, null, { type: 'path' }, { type: 'path' }, { type: 'path' }],
  [{ type: 'end' }, null, null, null, null, null],
]
// the default position that the player starts at
let playerPosition = [0,0]

function movePlayer(newPosition) {
  if (dungeon[newPosition[0]][newPosition[1]] == null) {
    console.log('You crashed into the wall, try again!');
    console.log('End the game: Ctrl + C');
    getInput();
  } else {
    if ((dungeon[newPosition[0]][newPosition[1]]).type === 'end') {
      return console.log('Congrats, you made it out of the dungeon! \n End the game: Ctrl + C');
    }
    console.log('Move player to: ', newPosition);
    playerPosition = newPosition;
    getInput();
    console.log('End the game: Ctrl + C');
  }
};

function getInput() {
  prompt.get(['input'], function (err, result) {
    if (err) { 
      console.log(err); 
    }
    if (result.input.toLowerCase() === 'left') {
      const newPosition = [playerPosition[0],playerPosition[1]-1];
      movePlayer(newPosition);
    } else if (result.input.toLowerCase() === 'right') { 
      const newPosition = [playerPosition[0],playerPosition[1]+1];
      movePlayer(newPosition);
    } else if (result.input.toLowerCase() === 'up') {
      const newPosition = [playerPosition[0]-1,playerPosition[1]];
      movePlayer(newPosition);
    } else if (result.input.toLowerCase() === 'down') { 
      console.log([playerPosition[0]+1,playerPosition[1]]);
      const newPosition = [playerPosition[0]+1,playerPosition[1]];
      movePlayer(newPosition);
    } else { 
      console.log('Invalid input, try again!');
    }
  })
}