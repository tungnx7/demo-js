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

// var readlineSync = require("readline-sync");
// var fs = require("fs");

// function main() {
//   loadData();
//   showMenu();
// }
// main();

// function showMenu() {
//   console.log("1. Show all students");
//   console.log("2. Create new student");
//   console.log("3. Save and Exit");

//   var option = readlienSync.question(">");
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
//       console.log("wrong option");
//       showMenu();
//       break;
//   }
// }

// var students = [];

// function loadData() {
//   var fileContent = fs.readFileSync('./data.json', {encoding: 'utf8'});
//   students = JSON.parse(fileContent);
// }

// function showStudents() {
//   for (var student of students) {
//     console.log(student.name + `:`, student.age, `years old`);
//   }
// }

// function showCreateStudent() {
//   var name = readlienSync.question('Name: ');
//   var age = readlienSync.question('Age: ');
//   var student = {
//     name: name,
//     age: parseInt(age),
//   }
//   students.push(student);
// }

// function saveAndExit() {
//   var content = JSON.stringify(students);
//   fs.writeFileSync('./data.json', content, {encoding: 'utf8'});
// }

// var readlineSync = require("readline-sync");
// var fs = require("fs");

// function main() {
//   loadData();
//   showMenu();
// }
// main();

// function showMenu() {
//   console.log("1. Show all students");
//   console.log("2. Create new student");
//   console.log("3. Save and Exit");

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

// var students = [];

// function loadData(){
//   var fileContent = fs.readFileSync('./data.json', {encoding: 'utf8'});
//   students = JSON.parse(fileContent);
// }

// function showStudents() {
//   for (var student of students) {
//     console.log(student.name + `:`, student.age, `years old`);
//   }
// }

// function showCreateStudent() {
//   var name = readlineSync.question('Name: ');
//   var age = readlineSync.question('Age: ');
//   var student = {
//     name: name,
//     age: parseInt(age),
//   }
//   students.push(student);
// }

// function saveAndExit() {
//   var content = JSON.stringify(students);
//   fs.writeFileSync('./data.json', content, {encoding: 'utf8'});
// }

// var readlineSync = require("readline-sync");
// var fs = require("fs");

// function main() {
//   loadData();
//   showMenu();
// }
// main();

// function showMenu() {
//   console.log("1. Show all student");
//   console.log("2. Create new student");
//   console.log("3. Save and Exit");

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

// var students = [];

// function loadData() {
//   var fileContent = fs.readFileSync('./data.json', {encoding: 'utf8'});
//   students = JSON.parse(fileContent);
// }

// function showStudents() {
//   for (var student of students) {
//     console.log(student.name + `:`, student.age, `years old`);
//   }
// }

// function showCreateStudent() {
//   var name = readlineSync.question('Name: ');
//   var age = readlineSync.question('Age: ');
//   var student = {
//     name: name,
//     age: parseInt(age),
//   }
//   students.push(student);
// }

// function saveAndExit() {
//   var content = JSON.stringify(students);
//   fs.writeFileSync('./data.json', content, {encoding: 'utf8'});
// }

var fs = require("fs");
var readlineSync = require("readline-sync");

function main() {
  loadData();
  showMenu();
}
main();

function showMenu() {
  console.log("1. Show All Students");
  console.log("2. Create New Student");
  console.log("3. Save And Exit");

  var option = readlineSync.question(">");
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
      console.log("Wrong option");
      showMenu();
      break;
  }
}

var students = [];

function loadData() {
  var fileContent = fs.readFileSync('./data.json', {encoding:'utf-8'});
  students = JSON.parse(fileContent);
}

function showStudents() {
  for (student of students) {
    console.log(student.name + `:`, student.age, `years old`);
  }
}

function showCreateStudent() {
  var name = readlineSync.question('Name: ')
  var age = readlineSync.question('Age: ')
  var student = {
    name: name,
    age: parseInt(age)
  }
  students.push(student);
}

function saveAndExit() {
  var content = JSON.stringify(students);
  fs.writeFileSync('./data.json', content, {encoding: 'utf-8'});
}
