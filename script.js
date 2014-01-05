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

// Create a function to print a persons name(first and last) 

function printPerson(person){
	console.log(person.firstName + " " + person.lastName);
};

// using the function:

// printPerson(andrew);
// printPerson(myMother);

// creating a function that allows you to list all the contacts 
// this will need to loop through the contacts and use the printPerson function

function list (){
    var contactsLength = contacts.length;
    for (i = 0; i < contacts.length; i++){
        printPerson(contacts[i]);
    }
}


// add function to search if someone is in the list:

function search(lastName){
	var contactsLength = contacts.length;
	for (var i = 0; i < contacts.length; i++ ){
		if (lastName == contacts[i].lastName){
			printPerson(contacts[i])
		}
	}
}


search("Silbersmith")
// how would you put something else if name didn't exist:  such as would you like to search
// for someone else?


// create a function for adding a contact:
// remember that contacts.length will equal one more than the objects in there so
// you can set the new contact equal the the length! wahooooo
function add (firstName, lastName, email, phoneNumber){
	contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
};

}

// try adding someone
add("drew", "smith", "drew@drewsmith.com", "123-456-78790");
list(); //make sure the add function worked






