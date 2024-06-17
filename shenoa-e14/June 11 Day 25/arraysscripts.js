const students = ["Alice", "Bob", "Charlie", "David", "Eve"];

const studentList = document.getElementById("student-list");

function updateStudentList() {
  // Clear the current list
  studentList.innerHTML = '';
  // Update the list with students
  students.forEach((student) => {
    const li = document.createElement("li");
    li.textContent = student;
    studentList.appendChild(li);
  });
}

updateStudentList();

const addStudentButton = document.getElementById("add-button");
addStudentButton.addEventListener("click", () => {
  const studentName = document.getElementById("student-name").value;
  if (studentName) {
    students.push(studentName);
    updateStudentList();
    // Clear the input field
    document.getElementById("student-name").value = '';
  }
});
