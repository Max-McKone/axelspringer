//Create an array to store the user list
let userList = [];

//Create a function to register users
function registerUser() {
    //Get the name and email from the input fields
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let age = document.getElementById("age").value;
    
    //Validate the input
    if (name === "" || email === "") {
        alert("Please enter your name and email.");
        return;
    }

    //Automatically assign an Id to the user
    const userId = userList.length + 1;

    //Create a new user object
    let newUser = {
        id: userId,
        username: username,
        name: name,
        age: age,
        email: email
    };
    
    //Add the user to the list
    userList.push(newUser);
    
    //Display the user list
    displayRegisteredUsers();
    
    //Clear the input fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("username").value = "";
    document.getElementById("age").value = "";
}

// Function to display the registered users
function displayRegisteredUsers() {
    //Get the user list container
    let userListContainer = document.getElementById("usersList");
    //Clear the user list container
    userListContainer.innerHTML = "";
    //Create a new ul element
    let ul = document.createElement("ul");
    //Loop through the user list and create li elements
    userList.forEach((user) => {
        let li = document.createElement("li");
        li.innerHTML = `${user.name} (${user.age}) - ${user.email}`;
        ul.appendChild(li);
    });
    userListContainer.appendChild(ul);
}
