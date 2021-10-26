// var readlineSync = require("readline-sync");
// const fs = require("fs");

// var students = [];

// function loadData() {
//   var fileContent = fs.readFileSync("./data.json", "utf8");
//   students = JSON.parse(fileContent);
// }

// function showMenu() {
//   console.log("1. Show all students");
//   console.log("2. Create a new student");
//   console.log("3. Save & Exit");

//   var option = readlineSync.question(">");
//   switch (option) {
//     case "1":
//       showStudents();
//       showMenu();
//       break;
//     case "2":
//       showCreateStudent();
//       showMenu();
//       break;
//     case "3":
//       saveAndExit();
//       break;
//     default:
//       console.log("Wrong option");
//       showMenu();
//       break;
//   }
// }

// function showStudents() {
//   for (var student of students) {
//     console.log(student.name + `:`, student.age, `years old`);
//   }
// }

// function showCreateStudent() {
//   var name = readlineSync.question("Name: ");
//   var age = readlineSync.question("Age: ");
//   var student = {
//     name: name,
//     age: parseInt(age),
//   };
//   students.push(student);
// }

// function saveAndExit() {
//   var content = JSON.stringify(students);
//   fs.writeFileSync("./data.json", content, { encoding: "utf8" });
// }

// function main() {
//   loadData();
//   showMenu();
// }

// main();

var readlienSync = require("readline-sync");
var fs = require("fs");

function main() {
  showMenu();
}
main();

function showMenu() {
  console.log("1. Show all students");
  console.log("2. Create new student");
  console.log("3. Save and Exit");

  var option = readlienSync.question(">");
  switch (option) {
    case "1":
      showStudents();
      showMenu();
      break;
    case "2":
      showCreateStudent();
      showMenu();
      break;
    case "3":
      saveAndExit();
      break;
    default:
      console.log("wrong option");
      showMenu();
      break;
  }
}
