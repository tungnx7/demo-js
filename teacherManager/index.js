var readlineSync = require("readline-sync");
var fs = require("fs");

function main() {
  loadData();
  showMenu();
}
main();

function showMenu() {
  console.log("1. Show All Teachers");
  console.log("2. Create New Teacher");
  console.log("3. Save And Exit");

  var option = readlineSync.question(">");
  switch (option) {
    case "1":
      showAllTeachers();
      showMenu();
      break;
    case "2":
      showCreateTeacher();
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

var teacheres = [];

function loadData() {
  var fileData = fs.readFileSync("data.json", { encoding: "utf-8" });
  teacheres = JSON.parse(fileData);
}

function showAllTeachers() {
  for (teacher of teacheres) {
    console.log(
      teacher.name + `:`,
      teacher.age,
      teacher.national,
      teacher.level
    );
  }
}

function showCreateTeacher() {
  var name = readlineSync.question("Name: ");
  var age = readlineSync.question("Age: ");
  var national = readlineSync.question("National: ");
  var level = readlineSync.question("Level: ");
  var teacher = {
    name: name,
    age: parseInt(age),
    national: national,
    level: level,
  };
  teacheres.push(teacher);
}

function saveAndExit() {
  var content = JSON.stringify(teacheres);
  fs.writeFileSync("data.json", content, { encoding: "utf-8" });
}
