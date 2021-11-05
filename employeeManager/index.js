var readlineSync = require("readline-sync");
var fs = require("fs");

function main() {
  loadData();
  showMenu();
}
main();

function showMenu() {
  console.log("1. Show All Employees");
  console.log("2. Create New Employee");
  console.log("3. Save And Exit");

  var option = readlineSync.question(">");
  switch (option) {
    case "1":
      showAllEmployees();
      showMenu();
      break;
    case "2":
      showCreateEmployee();
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

var employees = [];

function loadData() {
    var fileData = fs.readFileSync('./data.json', {encoding: 'utf-8'});
    employees = JSON.parse(fileData);
}

function showAllEmployees() {
    for (employee of employees) {
        console.log(employee.name + `:`, employee.age, `tuổi`, `sđt:`, employee.phone, 'địa chỉ:', employee.address, `facebook.instagram:`, employee.social, `lương:`, employee.salary);
    }
}

function showCreateEmployee() {
    var name = readlineSync.question('Name: ')
    var age = readlineSync.question('Age: ')
    var phone = readlineSync.question('Phone: ')
    var address = readlineSync.question('Address: ')
    var social = readlineSync.question('Facebook/Instagram: ')
    var salary = readlineSync.question('Salary: ')
    var employee = {
        name: name,
        age: parseInt(age),
        phone: parseInt(phone),
        address: address,
        social: social,
        salary: parseInt(salary)
    }
    employees.push(employee)
}

function saveAndExit() {
    var content = JSON.stringify(employees)
    fs.writeFileSync('./data.json', content, {encoding: 'utf-8'});
}