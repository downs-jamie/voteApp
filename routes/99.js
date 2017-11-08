// var bottle = 99;


for ( i = 99; i > 0; i--) {
	j = i -1;
	if (i == 1){
		console.log(i + " bottle of beer on the wall," + i + " bottle of beer,");
		console.log("take it down and pass it around.");
		console.log(j + " bottles of beer on the wall");
	}else if(j == 1){
		console.log(i + " bottles of beer on the wall," + i + " bottles of beer,")
		console.log("take it down and pass it around.");
		console.log(j + " bottle of beer on the wall");
	}else{
		console.log(i + " bottles of beer on the wall," + i + " bottles of beer,");
		console.log("take it down and pass it around.");
		console.log(j + " bottles of beer on the wall");
	}
	console.log("And, Now we are drunk!!!!!!")

}