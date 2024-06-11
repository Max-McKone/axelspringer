//create dummy array 
const students = ["Bojana", "Shenoa", "Estelle", "Regina", "Marlem", "Tina", "Zana", "Daniella", "Franzi"];

//access html student-list ul 
const studentList = document.getElementById("student-list");

function updateList() {
  studentList.innerHTML = "";
  //use forEach to create a li element and add text which is a value of individual array element
  students.forEach(student => {
    const listItem = document.createElement("li");
    listItem.textContent = student;
    studentList.appendChild(listItem);
  });
document.getElementById("student-name").value = "";
}
updateList()
const addBtn = document.getElementById('add-student');
addBtn.addEventListener('click', () => {
  const studentName = document.getElementById("student-name").value;
  //add student to the array
  students.push(studentName);
  updateList();
});

//deleting
const deleteBtn = document.getElementById("delete-student");
deleteBtn.addEventListener("click", () => {
  const studentName = document.getElementById("student-name").value;
  const indexToDelete = students.indexOf(studentName);
  console.log(indexToDelete)
  //check if the student exist before deleting 
  if (indexToDelete !== -1) {
    //remove from array
    students.splice(indexToDelete, 1);
    updateList();
  }
})