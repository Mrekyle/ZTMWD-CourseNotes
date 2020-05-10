
// Function Decleration

function sayHello() {
	console.log("Hello There");
}

sayHello();

// Function Expression

var a = function sayBye() {		 //As the function has no name, it is called an ANONYMOUS FUNCTION.
	console.log("Goodbye");
}

a();

// This below function allows, you to be able to use the same function multiple times, 
// whilst still being able to fully customise it any time you want. without adding thousands of lines of code. 

function sing(song) { //calling it, calls the function sing, to print song to the console, 
	console.log(song);
}

sing("Helllooooo");
sing("shakalaka");
sing("wallloooigig");

// Multiplication debugging

// function multiply(a, b) {
// 	a * b ;
// }

// multiply(5, 10);

// At this point, if you dont get the desired result, you can add colsole.log to check if the function actually works.

// function multiply(a, b) {
// 	 return a * b ;
// }

// multiply(5, 10);

// The above will fully work and return what ever has been inputted to the console.

// function multiply(a, b) {
// 	if (a > 10 || b < 10) {
// 	return "Thats too hard!";
// 	 }	else {
// 	return a*b;
// 	}
// }

// multiply(5, 10);

// The above is an example of when a return function is used twice in a function, this is because there is an if statement, which if the 
// desired information around the parameters is inputted, it will define what outcome is outputted.

// function multiply(a,b) {
// 	return a*b ;
// }

// alert(multiply(3,4));


// This will show it as a prompt on the screen, requiring no additional input.


// function checkDriversAge(age) {
// 	var age = prompt("What is your age?");
// 	if (Number(age) < 18) {
// 		alert("Sorry, you are too yound to drive this car. Powering off");
// 	} else if (Number(age) > 18) {
// 		alert("Powering On. Enjoy the ride!");
// 	} else if (Number(age) === 18) {
// 		alert("Congratulations on your first year of driving. Enjoy the ride!");
// 	}
// }

//An arrary is exactly the same as a variable, just instead of curly brackets, square ones are used.

var list = ["Cat", "Dog", "Monkey", "Bear"];
console.log(list[0]);

//When calling an arrary, the first one starts at 0, So above calling 0 will give Cat, and 2 will give Monkey.

var multiple = [
	["Cat", "Dog", "Monkey", "Bear"]
];

console.log(multiple[0][3]);

// The above array is an array with in an array, you just have to remember to call the array you want first, then what ever information you want.


//With the array, you can change things around inside the console Example below 

// list.shift(); - Will take away position 0
// list.pop(); - Will take away the last position
// list.push("Elephant"); - Will add elephent to the array, in the final position, returning its position so you know what to call to get it.
// list.concat(["Wolf", "Zebra"]); - This creates new lists in the array - which you need to assign its own variable, Example below,
// var newList = list.concat(["monkey"]); - Will create a new array of newList, including monkey! Whilst list, stay the same.
// list.sort(); - sorts the list into alphbetical order.
// With in lists, you can also add arrays, just use the {} brackets, and input your information. 
	// And you access the array the same way as before, and select the information in the same way too. 
	// IE user.spells[2]; - user - object, spells - array, 2 - the data
// You can also add functions inside arrays, just as you would do normally, then to call just do user.shout(); and it will run the function.
	//In the above example, 'shout' is a method of 'user' 
// Objects and arrays can also be empty, but are pretty useless without any information


// Below is an object - In objects you have properties and values, ie 'name' is the propertie and 'John' is the value

var user = {
	name: "John",
	age:  29,
	hobby: "Photography",
	isMarried: false,
}; 

// To call desired information, all you need to do is user.name
// To add extra properties to the object, just do - user.favouriteFood = "Chocolate";
// You Can change the values in the objects by doing - user.isMarried = true;
// Arrays can be put inside of objects, all you need to do, is specifiy the name and use the [] brackets, with the information inside.  
	// You call the information in the same way as before, IE with multiple users, you do 
	// user[4].password; - which will return the 4th users password to you. 


















