// var colors= [
// 	"rgb(255,0,0)",
// 	"rgb(255,255,0",
// 	"rgb(0,255,255)",
// 	"rgb(0,255,0)",
// 	"rgb(0,0,255)",
// 	"rgb(255,0,255)",
// ]
var colors = [];
var messageDisplay = document.querySelector("#message")
var colorDisplay = document.getElementById("colorDisplay");
var goalColor;
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
	//generat all new colors
generateRandomColor(6)
	//pick a new random color
	colorPicker() 
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		
	}

})

//selecting color display span from html
function colorPicker() {
	goalColor = colors[Math.floor(Math.random() * 6)];
	colorDisplay.textContent = goalColor;
	console.log(colors)
	return goalColor

}

//getting the sqaures fromt the HTML in an array/

var squares = document.querySelectorAll(".square")

function generateRandomColor(num){
	for (var i = 0; i < num; i++) {
		colors[i] = "rgb"+"("+x()+", "+x()+", "+x()+")"
	}
	//x is rgb respectively
	colorPicker() //random color pciker
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
generateRandomColor(6)
for(var i =0;i<squares.length; i++) {
	//filling an array with colors
	
	 //change number as per no. of squares
	squares[i].style.backgroundColor = colors[i] //improve
	


	//add click listeners to the squares
	squares[i].addEventListener("click", function(){
		//grab colors of clikced square and compare with correct color
		var clickedColor = this.style.backgroundColor
		if(clickedColor === goalColor){
			messageDisplay.textContent = "Correct"
			changeColors(clickedColor)
			h1.style.backgroundColor = clickedColor
			resetButton.textContent = "Play Again?"

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

