//HTML structure 
//<ul id="student-list"></ul>
//<input id="student-name" type="text" placeholder="Student name">
//<button id="add-button">Add student</button>

//Initialize and array with student names
const students = ["Alice", "Bob", "Charlie", "David", "Eve"];
//Get the student list element
const studentList = document.getElementById("student-list");

//Create the function that will add a student to the list
function updateStudentList() {
    //Clear the list
    studentList.innerHTML = "";
    //Iterate over the students array
    students.forEach((student) => {
      //Create a list item element
      const li = document.createElement("li");
      li.textContent = student;
      //Append the list item to the list
      studentList.appendChild(li);
    });
  }
    //Call the function to update the list and display it on the page when the page loads 
    updateStudentList();

    //Get the input and button elements
    const studentNameInput = document.getElementById("student-name").value;
    const addButton = document.getElementById("add-button");

    //Add an event listener to the button that will add a student to the list
    addButton.addEventListener("click", () => {
        //Get the student name from the input element
        const studentName = studentNameInput.value;
        //Add the student name to the students array
        students.push(studentName);
        //Update the list
        updateStudentList();
    }); 

