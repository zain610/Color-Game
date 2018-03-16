// var colors= [
// 	"rgb(255,0,0)",
// 	"rgb(255,255,0",
// 	"rgb(0,255,255)",
// 	"rgb(0,255,0)",
// 	"rgb(0,0,255)",
// 	"rgb(255,0,255)",
// ]
var numSquares = 6
var colors;
var messageDisplay = document.querySelector("#message")
var colorDisplay = document.getElementById("colorDisplay");
var goalColor;
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")
//getting the sqaures fromt the HTML in an array/
var squares = document.querySelectorAll(".square")
generateRandomColor(numSquares)


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected")
	easyBtn.classList.add("selected");
	numSquares =3
	generateRandomColor(numSquares)
	console.log(colors)
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none"
		}
	}
})
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected")
	easyBtn.classList.remove("selected");
	numSquares = 6;
	generateRandomColor(numSquares);
	console.log(colors);
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}

})

resetButton.addEventListener("click", function(){
	//generate new colors
	generateRandomColor(numSquares)
	message.textContent = "";
	this.textContent = "New Colors"
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

function generateRandomColor(num){
	colors=[]
	for (var i = 0; i < num; i++) {
		colors[i] = "rgb"+"("+x()+", "+x()+", "+x()+")"
	}
	//x is rgb respectively
	colorPicker(num) //random color pciker
}


//selecting color display span from html
function colorPicker(num) {
	goalColor = colors[Math.floor(Math.random() * num)];
	colorDisplay.textContent = goalColor;
	return goalColor

}




function x(){ 
	//here value could be betwee 0 and 255 
	var value = Math.floor(Math.random() * 256);
	return value
}


function changeColors(color){
	//loop through all squares
	for(i=0;i<squares.length;i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color
	}
}

//loop thorugh the array of colors to change the background of square.
//MAIn Game LOGIC
for(var i =0;i<squares.length; i++) {
	//filling an array with colors
	 //change number as per no. of squares
	squares[i].style.backgroundColor = colors[i] //improve
	//add click listeners to the squares
	squares[i].addEventListener("click", function(){
		//grab colors of clikced square and compare with correct color
		var clickedColor = this.style.backgroundColor
		if(clickedColor === goalColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		} 
		else {
			//when wrong: fade the square color to match background color
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = "Try Again"
			console.log(goalColor, clickedColor)
		}
		
	})

}






//

