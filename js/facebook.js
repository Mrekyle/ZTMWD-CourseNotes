
let list = {
	user: "Andy",
	password: "123"
}

// ------------------------------------

let database = [
	{
		user: "Andy",
		password: "123",
	},
	{
		user: "Jerry",
		password: "1234"
	},
	{
		user: "Anna",
		password: "1234"
	},
	{
		user: "Jack",
		password: "1234"
	},
	{
		user: "Taylor",
		password: "1234"
	}
];

// ------------------------------------

let newsfeed = [
	{
		user: "Andy",
		timeline: "My First Javascript"
	},
	{
		user: "Jerry",
		timeline: "My First Html"
	},
	{
		user: "Anna",
		timeline: "My First Crossiant"
	},
	{
		user: "Taylor",
		timeline: "I love Kyle Chart"
	}
];

// --------------------------------------

// Basic log in scripts


const userNamePrompt = prompt("What is your User Name?");
const passwordPrompt = prompt("What is your Password?");

function isUserValid(user, pass) {
	for (let i=0; i < database.length; i++) {
		if(database[i].user === user && database[i].password === pass) { 
		return true;
	} 	
}
return false;
}

function signIn(user, pass) {	
	if (isUserValid(user, pass)) {
		console.log(newsfeed);
	} else { 
		alert("Sorry wrong Username and Password!");
	}
}

signIn(userNamePrompt, passwordPrompt);



















