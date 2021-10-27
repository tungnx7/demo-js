var readlineSync = require("readline-sync");
var fs = require("fs");

function main() {
  loadData();
  showMenu();
}
main();

function showMenu() {
  console.log("1. Show all customer");
  console.log("2. Create new customer");
  console.log("3. Save and exit");

  var option = readlineSync.question(">");
  switch (option) {
    case "1":
      showCustomers();
      showMenu();
      break;
    case "2":
      showCreateCustomer();
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

var customers = [];

function loadData() {
    var fileContent = fs.readFileSync('./data.json', {encoding: 'utf-8'});
    customers = JSON.parse(fileContent);
}

function showCustomers() {
    for (var customer of customers) {
        console.log(customer.name, customer.phone, customer.birthday, customer.address, customer.social, customer.note);
    }
}

function showCreateCustomer() {
    var name = readlineSync.question('Name: ')
    var phone = readlineSync.question('Phone: ')
    var birthday = readlineSync.question('Birthday: ')
    var address = readlineSync.question('Address: ')
    var social = readlineSync.question('Facebook/Instagram: ')
    var note = readlineSync.question('Note: ')
    var customer = {
        name: name,
        phone: parseInt(phone),
        birthday: parseInt(birthday),
        address: address,
        social: social,
        note: note
    }
    customers.push(customer);
}

function saveAndExit() {
    fs.writeFileSync('./data.json', JSON.stringify(customers), {encoding: 'utf-8'});
}