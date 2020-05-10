
// THIS WILL OUTPUT A BUTTON CLICK.

var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() {
	console.log("CLICK");
})

//THIS WILL ADD EXTRA INFORMATION TO THE BOTTOM OF THE SELECTED LIST

// var button2 = document.getElementById("enter");
// var input = document.getElementById("input");
// var ul = document.getElementById("ul2");

// button2.addEventListener("click",function() {
// 	if (input.value.length > 0) {
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 		input.value = "";
// 	}
// })

//THE ABOVE CODE, WILL ADD A NEW LIST ITEM TO THE PARENT OF LI WHICH IS THE UL, ONLY IF THERE IS TEXT IN THE INPUT FEILD.
//ONCE THE BUTTON HAS BEEN CLICKED AND THE INPUT HAS BEEN APPENEDED TO THE CHILD OF UL, IT WILL CLEAR THE INPUT VALUE, SO YOU CANNOT SPAM ADD THE SAME VALUES.

// input.addEventListener("keypress", function(event) {
// 	if (input.value.length > 0 && event.keyCode === 13) {
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 		input.value = "";
// 	}
// })


//THE ABOVE WILL CHECK TO SEE IF THE ENTER KEY HAS BEEN PRESSED ON THE KEYBORED, AND THEN PERFORM THE SAME ACTIONS TO ADD THE INFORMATION TO THE LIST

//REFACTORING THE CODE BELOW - Basically means to clean it and keep it organised - DRY - DO Not Repeat Yourself!!

var button2 = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.getElementById("ul2");

function inputLength() {
	return input.value.length;
}
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}
function afterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
function afterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

input.addEventListener("keypress", afterKeypress);

button2.addEventListener("click", afterClick);



//Excercise time

// var list = document.querySelectorAll("li");

// for(var i = 0; i < list.length; i++) {
//    list[i].addEventListener("click", function(e){
//     e.currentTarget.classList.toggle("done");
//    })
//  }





