const studentsGrades = new Map([
  ["Alice", "A"],
  ["Bob", "B+"],
  ["Charlie", "A-"],
  ["Diana", "C+"],
  ["Ethan", "B"]
]);

// Convert the Map to an Array for splitting
const studentsArray = Array.from(studentsGrades);

// Split the original array into two groups and convert them back to Maps
const group1 = new Map(studentsArray.slice(0, 3)); // First 3 students
const group2 = new Map(studentsArray.slice(3)); // Last 2 students

// Function to display student names and grades
function displayStudentGrades(map, listId) {
  const ulElement = document.getElementById(listId);

  // Clear existing list items
  ulElement.innerHTML = "";

  // Iterate over the Map entries
  for (let [name, grade] of map.entries()) {
    // Create a new list item for each entry
    const liElement = document.createElement("li");
    liElement.textContent = `${name}: ${grade}`;

    // Append the list item to the list
    ulElement.appendChild(liElement);
  }
}

// Function to display group names and grades
function displayGroupGrades(groupMap, groupId) {
  const ulElement = document.getElementById(groupId + "List");

  // Clear existing list items
  ulElement.innerHTML = "";

  // Iterate over the Map entries
  for (let [name, grade] of groupMap.entries()) {
    // Create a new list item for each entry
    const liElement = document.createElement("li");
    liElement.textContent = `${name}: ${grade}`;

    // Append the list item to the unordered list
    ulElement.appendChild(liElement);
  }
}

// Wait for the DOM and display grades
document.addEventListener('DOMContentLoaded', () => {
  displayStudentGrades(studentsGrades, "gradesList"); // Display original list
  displayGroupGrades(group1, "group1"); // Display Group 1
  displayGroupGrades(group2, "group2"); // Display Group 2
});


// Task 3: Objective: Create a Set from an array of student hobbies with some duplicates to ensure all hobbies are unique, and display them in <ul>

const hobbiesArray = [
  "cycling",
  "reading", //dup
  "swimming",
  "cycling", 
  "gaming",
  "reading", // dup
  "hiking",
  "reading" //dup
];

// Create a Set from the array to remove duplicates
const uniqueHobbies = new Set(hobbiesArray);

// Function to display unique hobbies
function displayUniqueHobbies(hobbiesSet, listId) {
  const ulElement = document.getElementById(listId);

  // Clear existing list items
  ulElement.innerHTML = "";

  // Iterate over the Set entries
  for (let hobby of hobbiesSet) {
    // Create a new list item for each entry
    const liElement = document.createElement("li");
    liElement.textContent = hobby;

    // Append the list item to the list
    ulElement.appendChild(liElement);
  }
}


//  Task 4: Objective: Combine two Sets of student names using the spread operator and display the result.

const set1 = new Set(["Alice", "Bob", "Charlie"]);
const set2 = new Set(["Diana", "Ethan", "Frank"]);

// Combine the Sets using the spread operator
const combinedSet = new Set([...set1, ...set2]);

// Function to display combined student names
function displayCombinedNames(namesSet, listId) {
  const ulElement = document.getElementById(listId);

  // Clear existing list items
  ulElement.innerHTML = "";

  // Iterate over the Set entries
  for (let name of namesSet) {
    // Create a new list item for each entry
    const liElement = document.createElement("li");
    liElement.textContent = name;

    // Append the list item to the list
    ulElement.appendChild(liElement);
  }
}




// Wait for the DOM to be loaded and grades and hobbies
document.addEventListener('DOMContentLoaded', () => {
  displayStudentGrades(studentsGrades, "gradesList"); // Display original list
  displayStudentGrades(group1, "group1List"); // Display Group 1
  displayStudentGrades(group2, "group2List"); // Display Group 2
  displayUniqueHobbies(uniqueHobbies, "hobbiesList"); // Display unique hobbies
  displayCombinedNames(combinedSet, "combinedNamesList"); // Display combined names
});




