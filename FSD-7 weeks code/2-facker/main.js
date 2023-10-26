//Task-1:Faking names
// import { faker } from '@faker-js/faker';
// let firstName = faker.name.firstName();
// let lastName = faker.name.lastName();

// let jobTitle = faker.name.jobTitle();
// let prefix = faker.name.prefix(); 
// let suffix = faker.name.suffix();
// let jobArea = faker.name.jobArea();

// let phone = faker.phone.number();

// console.log(`Employee: ${prefix} ${firstName} ${lastName} ${suffix}`);
// console.log(`Job title: ${jobTitle}`);
// console.log(`Job area: ${jobArea}`);
// console.log(`Phone: ${phone}`);




//Task-2:Faking dates
// import { faker } from '@faker-js/faker';

// let futureDate = faker.date.future();
// let recentDate = faker.date.recent();
// let weekday = faker.date.weekday();

// console.log(futureDate);
// console.log(recentDate);
// console.log(weekday);




//Task-3:Faking random values
// import { faker } from '@faker-js/faker';

// let number = faker.string.numeric();
// console.log(number);

// let uuid = faker.string.uuid();
// console.log(uuid);

// let word = faker.lorem.word();
// console.log(word);

// let words = faker.lorem.words(6);
// console.log(words);




//Task-4:Faking locale data
// import { faker } from '@faker-js/faker/locale/de';

// let firstName = faker.person.firstName();
// let lastName = faker.person.lastName();

// console.log(`Hello: ${firstName} ${lastName}`);

// let month = faker.date.month();
// let recentDate = faker.date.recent();
// let rectentDate = faker.date.weekday();

// console.log(month);
// console.log(recentDate);
// console.log(rectentDate);


//Task-5:Serving fake data with JSON Server
//test-1-create and push the data

// import { faker } from '@faker-js/faker';
// import fs from 'fs'

// function generateUsers() {

//   let users = []

//   for (let id=1; id <= 100; id++) {

//     let firstName = faker.name.firstName();
//     let lastName = faker.name.lastName();
//     let email = faker.internet.email();

//     users.push({
//         "id": id,
//         "first_name": firstName,
//         "last_name": lastName,
//         "email": email
//     });
//   }

//   return { "data": users }
// }

// let dataObj = generateUsers();

// fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));



//test-2-get the data in webpage
import { faker } from '@faker-js/faker';
import fs from 'fs';
import express from 'express';

const app = express();
const PORT = 3000;

function generateUsers() {
  let users = [];

  for (let id = 1; id <= 100; id++) {
    let firstName = faker.person.firstName(); 
    let lastName = faker.person.lastName(); 
    let email = faker.internet.email();

    users.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email: email,
    });
  }
  console.log({"data":users});

  return { data: users };
}

let dataObj = generateUsers();

fs.writeFileSync('data1.json', JSON.stringify(dataObj, null, '\t'));

app.get('/', (req, res) => {
    res.send(`welcome to faker data`); 
  });
app.get('/data', (req, res) => {
  res.send(dataObj.data); 
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
