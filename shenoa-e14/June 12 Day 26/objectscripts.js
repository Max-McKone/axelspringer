// Function to create a user object
function User(name, id, noOfProjects) {
    const user = {};
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;
    user.getProjects = function() {};
    user.changeName = function() {};
    user.incrementProject = function() {};
    user.decrementProject = function() {};
}

// User objects
const user1 = {
 id: 1,
 username: "john_doe",
 name: "John Doe",
 age: 25,
 email: "john@example.com",   
};

const user2 = {
    id: 2,
    username: "jane_doe",
    name: "Jane Doe",
    age: 22,
    email: "jane@example.com",
};

const userList = [user1, user2];

// Display the user list
function displayUserInfo(users) {
    const personInfoElement = document.getElementById("person-info");

    // Clear the existing content
    personInfoElement.innerHTML = "";

    // Iterate through the list of users
    users.forEach((user) => {
        const userInfoParagraph = document.createElement('p'); // Corrected this line
        userInfoParagraph.textContent = `Name: ${user.name}, Age: ${user.age}, ID: ${user.id}, Email: ${user.email}`;
        personInfoElement.appendChild(userInfoParagraph);
    });
}

// Initial display of the user list
displayUserInfo(userList);

function removeUserByID() {
    const userIdInput = document.getElementById("userId");
    const userId = parseInt(userIdInput.value, 10);

    if (!isNaN(userId)) {
        const indexToRemove = userList.findIndex(user => user.id === userId);

        if (indexToRemove !== -1) {
            userList.splice(indexToRemove, 1);

            // Display the updated user list
            displayUserInfo(userList);

            // Clear the input field
            userIdInput.value = "";
        } else {
            alert("User not found");
        }
    } else {
        alert("Please enter a valid ID");
    }
}
