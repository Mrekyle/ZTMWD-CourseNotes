
//		LOOPS



var  toDo = [
	"Clean Room",
	"Eat Healthy",
	"Go for a run",
	"Study Javascript",
	"Build desk"
];

for (var i=0; i < toDo.length; i++) {
	toDo [i] = toDo[i] + "!";
	// To just print it to the console and not change the list - console.log(toDo[i] +"!");
}

// toDo.length - Tells you how long the list is, above will return '5'
// Above is saying, start with 0, then as long as 'i' is less than the length, run the loop, and add 1 
// The above code is running a loop to count the list length, then add a '!' on the end of each item, until it is finished

var  toDo2 = [
	"Clean Room",
	"Eat Healthy",
	"Go for a run",
	"Study Javascript",
	"Build desk"
];

var toDo2Length = toDo2.length;
for (var i=0; i < toDo2Length; i++) {
	// toDo2.pop();
	console.log(toDo2);
}

// The above code here, crosses each item off the list as it goes through the loop. 

var  toDo3 = [
	"Clean Room",
	"Eat Healthy",
	"Go for a run",
	"Study Javascript",
	"Build desk"
];

var toDo3Length = 0;
while (toDo3Length > 10) {
	console.log(toDo3Length);
	toDo3Length++;
}


// 'while' is saying that as long as the statment is true, keep going until it is not, above is counting 1 to 10, but stops at 9 because the 
	// variable is set to 10.

	// '++' adds 1 to the number - '--' takes away 1 from the number 


// var infinite = 10;
// while (infinite > 0) {
// 	console.log(infinite);
// 	infinite++
// }


// THE ABOVE IS AN INFINITE LOOP AND WILL BREAK GOOGLE CHROME/ANY CONSOLE!!!! BE CAREFULL


//The 'do while' loop, is almost the exact same as the while loop, but it says, 'do' this first and then do the 'while' statement, Example below.

var counterTwo = 10
do {
	console.log(counterTwo);
	counterTwo--
} while (counterTwo > 0);


// FOR EACH LOOP - Does work, just not in this script, working exaple on inde.html


var  toDo4 = [
	"Clean Room",
	"Eat Healthy",
	"Go for a run",
	"Study Javascript",
	"Build desk"
];

var  toDo5 = [
	"Clean Room",
	"Eat Healthy",
	"Go for a run",
	"Study Javascript",
	"Build desk"
];

var toDo4Length = toDo4.length;
for (var i=0; i < toDo4Length; i++) {
	console.log(i);
}

toDo4.forEach(function(toDo4, i) {
	console.log(toDo4, i)
})

// To access the index, just add ', i' inot the paramaters
// You are able to seperate the function from the loop too! to let you be able to use that same function in other places
	// But if you dont need to use the same function, you can just put it into the loop like above, and save some time! 
	// Example of code with no function below.

function toDO(toDo4, i) {
	console.log(toDo4, i)
}

todo4.forEach(toDo);
toDo5.forEach(toDo)

//Can be used multiple times, like the above example



