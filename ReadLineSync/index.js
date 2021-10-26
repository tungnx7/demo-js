var readlineSync = require('readline-sync');

// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');

// var languages = [];

// var language = readlineSync.question('What is yout mother language?');
// languages.push(language);

// console.log(languages);

// var pet = {};

// var name = readlineSync.question('My pet name: ');
// var gender = readlineSync.question('My pet gender: male/female ');
// var weight = readlineSync.question('My pet weight: ');

// pet.name = name;
// pet.gender = gender;
// pet.weight = parseInt(weight);

// console.log(pet);

var survey = {};

var name = readlineSync.question('What is your full name?');
var age = readlineSync.question('How old are you?');
var birthday = readlineSync.question('What is your birthday?');
var address = readlineSync.question('What is your address?');
var school = readlineSync.question('What is your school name?');
var classAtSchool = readlineSync.question('Which class are you in at school?');
var motherName = readlineSync.question('What is your mother name?');
var fatherName = readlineSync.question('What is your father name?');
var brotherAndSister = readlineSync.question('How many brothers or sisters do you have?');

survey.name = name;
survey.age = parseInt(age);
survey.birthday = birthday;
survey.address = address;
survey.school = school;
survey.classAtSchool = parseInt(classAtSchool);
survey.motherName = motherName;
survey.fatherName = fatherName;
survey.brotherAndSister = parseInt(brotherAndSister);

console.log(survey);