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

	await scrollMatrixText('start',{r:0,g:255,b:0},10,true);
	await speak('Start', true);


//Green Checkpoint
//LED's turn Green
//Driver: Caleb
//Navigator: Aiden

	await roll(0, 50, 2.5);

//Shound #1 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Caleb
//Navigator: Aiden


//Red Checkpoint
//LED's turn Red
//Driver: Aiden
//Navigator: Caleb


//Shound #2 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Caleb
//Navigator: Aiden


//Purple Checkpoint
//LED's turn Purple
//Driver: Aiden
//Navigator: Caleb


//Shound #3 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Caleb
//Navigator: Aiden


//Blue Checkpoint
//LED's turn Purple
//Driver: Aiden
//Navigator: Caleb


//Finished & Say Finish
//Bolt will say Finished across LED's & say it out loud
//Driver: Caleb
//Navigator: Aiden


//End Program
}
