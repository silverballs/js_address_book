// window.prompt('test');


// create an object 

var andrew = {
	firstName: "Andrew",
	lastName: "Silbersmith",
	phoneNumber: "973-818-6390",
	email: "asilbersmith11@gmail.com"
};
// make sure object is set up good by inspecting page
console.log(andrew);
// to access a property of andrew you would do console.log(andrew.key)

// add another contact:

var myMother = {
	firstName: "Jayne",
	lastName: "Dellon",
	phoneNumber: "123-245-7890",
	email: "mymother@yourmother.com"
};

// create an array to store your contacts in... 
// var contacts [object1, object2]
var contacts = [andrew, myMother]

// making sure you can access your contacts do:
console.log(contacts[1]) // this will access myMother through the array;

