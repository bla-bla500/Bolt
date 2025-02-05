
//Team Members: Caleb Hermann & Aiden Walker
//Date 1.24.2025
//Program: Maze
//Hardware: Bolt #SB-EC76


//Begin Pragram
 async function startProgram() {

//Start & Say Start
//Bolt will say start across LED's & say it outloud
//Driver: Aiden
//Navigator: Caleb

 await scrollMatrixText('start',{r:0,g:255,b:0},20,true);
 await speak('Start', true);


//Green Checkpoint
//LED's turn Green
//Driver: Caleb
//Navigator: Aiden

 await roll(0,74,2);
 await delay(1.5);
 await setMainLed({r:0, g:255, b:0})


//Sound #1 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Aiden
//Navigator: Caleb

  await roll(90, 53, 2);
  await delay (1.5);
  await roll (180, 40, 2);
  await delay (1.5);
  await Sound.Animal.Monkey.play(true);


//Red Checkpoint
//LED's turn Red
//Driver: Caleb
//Navigator: Aiden

  await roll(215, 41, 2);
  await delay (1.5);
  await roll(125, 28, 2);
  await delay (1.5);
  await setMainLed({r:255, g:0, b:0})


//Sound #2 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Aiden
//Navigator: Caleb

  await roll(35, 41, 2);
  await delay(1.5);
  await Sound.Animal.Monkey.play(true);

//Purple Checkpoint
//LED's turn Purple
//Driver: Caleb
//Navigator: Aiden



//Sound #3 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Aiden
//Navigator: Caleb



//Blue Checkpoint
//LED's turn Blue
//Driver: Caleb
//Navigator: Aiden



//Finished & Say Finish
//Bolt will say Finished across LED's & say it out loud
//Driver: Aiden
//Navigator: Caleb


//End Program
}
