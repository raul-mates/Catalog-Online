"use strict";

class Account {
  constructor(
    firstName,
    lastName,
    email,
    username,
    password,
    address,
    grade,
    uid,
    icon
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
    this.address = address;
    this.grade = grade;
    this.uid = uid;
    this.icon = icon;
    this.classes = {};
  }

  setSubjectAndGrade(grade) {
    this.classes = grade;
  }
}

class Teachers {
  constructor(
    firstName,
    lastName,
    email,
    username,
    password,
    studentsGrade,
    icon
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
    this.studentsGrade = studentsGrade;
    this.icon = icon;
  }
}

const account1 = new Account(
  "Anastasia",
  "Popescu",
  "anastasiapopescu@yahoo.com",
  "an.po110898",
  "123456",
  "Honolulu",
  "9.98",
  1,
  "img/dudess1.jpg"
);

account1.setSubjectAndGrade({
  "Object Oriented Programming": "9.40",
  "Functional Programming": "8.70",
  "Declarative Programming": "9.37",
  "Async/Await AJAX": "9",
  "Destructuring Arrays": "10",
  "Destructuring Objects": "7.77",
  "Closure": "10",
  "Hoisting": "10",
});

const account2 = new Account(
  "Raul",
  "Mates",
  "matesraulalexandru@gmail.com",
  "ma.ra291296",
  "123456",
  "Honolulu",
  "8.34",
  2,
  "img/dude1.jpg"
);

account2.setSubjectAndGrade({
  "Object Oriented Programming": "9.40",
  "Functional Programming": "8.70",
  "Declarative Programming": "9.37",
  "Async/Await AJAX": "9",
  "Destructuring Arrays": "10",
  "Destructuring Objects": "7.77",
  "Closure": "10",
  "Hoisting": "8",
});

const account3 = new Account(
  "Andra",
  "Portocala",
  "andratheporto@gmail.com",
  "an.po428333",
  "233489y4",
  "Cluj-Napoca",
  "9.73",
  3,
  "img/andra.png"
);

account3.setSubjectAndGrade({
  "Object Oriented Programming": "9.40",
  "Functional Programming": "8.70",
  "Declarative Programming": "9.37",
  "Async/Await AJAX": "9",
  "Destructuring Arrays": "10",
  "Destructuring Objects": "7.77",
  "Closure": "10",
  "Hoisting": "10",
});

const account4 = new Account(
  "Jane",
  "Doe",
  "jane.doe@gmail.com",
  "ja.do242891",
  "233489y4",
  "Brooklyn, New York",
  "8.33",
  4,
  "img/jane.jpg"
);

account4.setSubjectAndGrade({
  "Object Oriented Programming": "9.40",
  "Functional Programming": "8.70",
  "Declarative Programming": "9.37",
  "Async/Await AJAX": "9",
  "Destructuring Arrays": "10",
  "Destructuring Objects": "7.77",
  "Closure": "10",
  "Hoisting": "10",
});

const account5 = new Account(
  "John",
  "Smith",
  "john.smith@gmail.com",
  "jo.sm242891",
  "233489y4",
  "Brooklyn, New York",
  "8.50",
  5,
  "img/john.jpg"
);

account5.setSubjectAndGrade({
  "Object Oriented Programming": "9.40",
  "Functional Programming": "8.70",
  "Declarative Programming": "9.37",
  "Async/Await AJAX": "9",
  "Destructuring Arrays": "10",
  "Destructuring Objects": "7.77",
  "Closure": "10",
  "Hoisting": "10",
});

const account6 = new Account(
  "Oberyn",
  "Martell",
  "season8oof@gmail.com",
  "ob.ma133796",
  "c3pofeb",
  "Kings Landing",
  "10",
  6,
  "img/oberyn.jpg"
);

account6.setSubjectAndGrade({
  "Object Oriented Programming": "9.40",
  "Functional Programming": "8.70",
  "Declarative Programming": "9.37",
  "Async/Await AJAX": "9",
  "Destructuring Arrays": "10",
  "Destructuring Objects": "7.77",
  "Closure": "10",
  "Hoisting": "10",
});

export const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
];

//////////////////////////////////////////

const teacher1 = new Teachers(
  "Jonas",
  "Schmedtmann",
  "jonas.schmedtmann@gmail.com",
  "jo.sc2222",
  "123456",
  "A+",
  "img/18718850.jpg"
);

const teacher2 = new Teachers(
  "Maximilian",
  "Schwarzmüller",
  "maximus@gmail.com",
  "ma.sc3333",
  "123456",
  "A+",
  "img/IMG_0477.jpeg"
);

const teacher3 = new Teachers(
  "Brad",
  "Traversy",
  "traversymedia@gmail.com",
  "br.tr4444",
  "123456",
  "A",
  "img/Brad_Traversy.jpg"
);

const teacher4 = new Teachers(
  "Kyle",
  "WebDevSimplified",
  "webdevsimple@gmail.com",
  "ky.we5555",
  "123456",
  "B+",
  "img/331561.png"
);

const teacher5 = new Teachers(
  "Dev",
  "Ed",
  "DevEd@gmail.com",
  "de.ed6666",
  "123456",
  "A-",
  "img/Dev_Ed.jpg"
);

const teacher6 = new Teachers(
  "Andrei",
  "Neagoie",
  "andrei_neagoie@yahoo.com",
  "ad.ne7777",
  "123456",
  "B-",
  "img/SOdG5r1f.jpg"
);

export const teachers = [
  teacher1,
  teacher2,
  teacher3,
  teacher4,
  teacher5,
  teacher6,
];
