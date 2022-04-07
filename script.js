"use strict";

import { accounts } from "./classes.js";
import { teachers } from "./classes.js";

//////////////////////////////////////////////////////
//////////////// DOCUMENT OBJECT MODEL ///////////////

const loginBttn = document.querySelector(".login-form__button");

const usernameInput = document.getElementById("login-username");

const passwordInput = document.getElementById("login-password");

const formBody = document.querySelector(".login-form");

const registerFormBttn = document.querySelector(".login-form__register");

const registerBttn = document.querySelector(".registration-form__button");

const registrationForm = document.querySelector(".registration-form-hidden");

const accountAlreadyHaveBttn = document.querySelector(
  ".login-form__alreadyHave"
);

const modalWindow = document.querySelector(".modal-window__edit");
const overlay = document.querySelector(".overlay");

const studentTable = document.getElementById("students-table");
const teachersTable = document.getElementById("teachers-table");
const classesTable = document.getElementById("grades-table");

const studentsBttn = document.getElementById("students-button");
const teachersBttn = document.getElementById("teachers-button");
const classesBttn = document.getElementById("classes-button");

//////////////////////////////////////////////////////
////////////////////// LOGIC /////////////////////////

if (loginBttn) {
  loginBttn.addEventListener("click", function (e) {
    e.preventDefault();

    const teacherValidation = teachers.some((user) => {
      if (
        usernameInput.value === user.username &&
        passwordInput.value === user.password
      ) {
        return true;
      }
    });

    const userValidation = accounts.some((user) => {
      if (
        usernameInput.value === user.username &&
        passwordInput.value === user.password
      ) {
        return true;
      }
    });

    if (userValidation === true) {
      formBody.classList.replace("login-form", "login-form-hidden");
      window.location.pathname = "main.html";
    }

    if (userValidation === true && passwordValidation === false) {
      passwordInput.value = "";
    } else {
      usernameInput.value = "";
      passwordInput.value = "";
    }
    if (userValidation === true) {
      formBody.classList.replace("login-form", "login-form-hidden");
      window.location.pathname = "main.html";
    }

    if (userValidation === true && passwordValidation === false) {
      passwordInput.value = "";
    } else {
      usernameInput.value = "";
      passwordInput.value = "";
    }

    if (teacherValidation === true) {
      formBody.classList.replace("login-form", "login-form-hidden");
      window.location.pathname = "main.html";
    }

    if (teacherValidation === true && passwordValidation === false) {
      passwordInput.value = "";
    } else {
      usernameInput.value = "";
      passwordInput.value = "";
    }
  });
}

if (registerFormBttn) {
  registerFormBttn.addEventListener("click", function () {
    formBody.classList.replace("login-form", "login-form-hidden");
    registrationForm.classList.replace(
      "registration-form-hidden",
      "registration-form"
    );
  });
}

if (accountAlreadyHaveBttn) {
  accountAlreadyHaveBttn.addEventListener("click", function () {
    formBody.classList.replace("login-form-hidden", "login-form");
    registrationForm.classList.replace(
      "registration-form",
      "registration-form-hidden"
    );
  });
}

if (registerFormBttn) {
  registerBttn.addEventListener("click", function (e) {
    e.preventDefault();
  });
}

const tableRowTemplatePopulator = (account) => {
  return `
    <tr id="user-${account.uid}">
      <td><img src="${account.icon}" alt="${account.firstName} Image" style="border-radius: 100px; margin-left: 2.5rem; background-color: #009578;
      border:3px solid #009578;    
      height:6.5rem;
      border-radius:50%;
      -moz-border-radius:50%;
      -webkit-border-radius:50%;
      width:6.5rem;"></td>
      <td id="first-name">${account.firstName}</td>
      <td id="last-name">${account.lastName}</td>
      <td id="email">${account.email}</td>
      <td id="grade">${account.grade}</td>
      <td><button class="edit-button" id="edit-button__data${account.uid}" data-first-name="${account.firstName}" data-last-name="${account.lastName}" data-email="${account.email}" data-username="${account.username}" data-address="${account.address}">Edit</button></td>
    </tr>
  `;
};

const tableContent = () => {
  accounts.forEach((account) => {
    studentTable.insertAdjacentHTML(
      "beforeend",
      tableRowTemplatePopulator(account)
    );
  });
};
tableContent();

const teachersRowTemplatePopulator = (account) => {
  return `
    <tr>
      <td><img src="${account.icon}" alt="${account.firstName} Image" style="border-radius: 100px; margin-left: 2.5rem; background-color: #009578;
      border:3px solid #009578;    
      height:6.5rem;
      border-radius:50%;
      -moz-border-radius:50%;
      -webkit-border-radius:50%;
      width:6.5rem;"></td>
      <td id="teachers-firstname">${account.firstName}</td>
      <td id="teachers-lastname">${account.lastName}</td>
      <td>${account.studentsGrade}</td>
      <td>${account.email}</td>
    </tr>
  `;
};

const teachersContent = () => {
  teachers.forEach((account) => {
    teachersTable.insertAdjacentHTML(
      "beforeend",
      teachersRowTemplatePopulator(account)
    );
  });
};
teachersContent();

const openModal = () => {
  overlay.classList.remove("hidden");
  modalWindow.classList.remove("hidden");
};

const closeModal = () => {
  overlay.classList.add("hidden");
  modalWindow.classList.add("hidden");
};

const modal = document.querySelectorAll(".edit-button");

modal.forEach((bttn) => {
  bttn.addEventListener("click", openModal);
});

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalWindow.classList.contains("hidden"))
    closeModal();
});

//////////////////////////////// DATASET EDIT FORM /////////////////////////////

const editBttn = document.querySelectorAll(".edit-button");
const saveBttn = document.querySelector(".save-edit");

editBttn.forEach((bttn) => {
  bttn.addEventListener("click", function () {
    document.getElementById("first-name__data").value = bttn.dataset.firstName;
    document.getElementById("last-name__data").value = bttn.dataset.lastName;
    document.getElementById("email__data").value = bttn.dataset.email;
    document.getElementById("username__data").value = bttn.dataset.username;
    document.getElementById("address__data").value = bttn.dataset.address;
  });
});

saveBttn.addEventListener("click", function () {
  accounts.filter((account) => {
    const uniqueIdAccount = Number(
      document.querySelector(".edit-button").id.substring(17)
    );
    if (account.uid === uniqueIdAccount) {
      account.firstName = document.getElementById("first-name__data").value;
      account.lastName = document.getElementById("last-name__data").value;
      account.email = document.getElementById("email__data").value;
      account.username = document.getElementById("username__data").value;
      account.address = document.getElementById("address__data").value;

      document.getElementById(`user-${account.uid}`).innerHTML = `
    <tr id="user-${account.uid}">
    <td><img src="${account.icon}" alt="${account.firstName} Image" style="border-radius: 100px; margin-left: 2.5rem; background-color: #009578;
    border:3px solid #009578;    
    height:6.5rem;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    width:6.5rem;"></td>
    <td id="first-name">${account.firstName}</td>
    <td id="last-name">${account.lastName}</td>
    <td id="email">${account.email}</td>
    <td id="grade">${account.grade}</td>
    <td><button class="edit-button" id="edit-button__data${account.uid}" data-first-name="${account.firstName}" data-last-name="${account.lastName}" data-email="${account.email}" data-username="${account.username}" data-address="${account.address}">Edit</button></td>
    </tr>
    `;
    }
  });
  closeModal();
});

studentsBttn.addEventListener("click", function () {
  document.querySelector(".content-table").classList.remove("hidden");
  document.getElementById("table1").classList.add("active");
  document.getElementById("table2").classList.remove("active");
  document.getElementById("table3").classList.remove("active");

  ////// Sort students table ///////
  const getCellValue = (tr, idx) =>
    tr.children[idx].innerText || tr.children[idx].textContent;

  const comparer = (idx, asc) => (a, b) =>
    ((v1, v2) =>
      v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
        ? v1 - v2
        : v1.toString().localeCompare(v2))(
      getCellValue(asc ? a : b, idx),
      getCellValue(asc ? b : a, idx)
    );

  document.querySelectorAll("th").forEach((th) =>
    th.addEventListener("click", () => {
      const table = document.getElementById("table1");
      const tbody = table.querySelector("tbody");
      Array.from(tbody.querySelectorAll("tr"))
        .sort(
          comparer(
            Array.from(th.parentNode.children).indexOf(th),
            (this.asc = !this.asc)
          )
        )
        .forEach((tr) => tbody.appendChild(tr));
    })
  );
});

teachersBttn.addEventListener("click", function () {
  document.querySelector(".second-table").classList.remove("hidden");
  document.getElementById("table2").classList.add("active");
  document.getElementById("table1").classList.remove("active");
  document.getElementById("table3").classList.remove("active");

  //// sort teachers table ////
  const getCellValue = (tr, idx) =>
    tr.children[idx].innerText || tr.children[idx].textContent;

  const comparer = (idx, asc) => (a, b) =>
    ((v1, v2) =>
      v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
        ? v1 - v2
        : v1.toString().localeCompare(v2))(
      getCellValue(asc ? a : b, idx),
      getCellValue(asc ? b : a, idx)
    );

  document.querySelectorAll("th").forEach((th) =>
    th.addEventListener("click", () => {
      const table = document.getElementById("table2");
      const tbody = table.querySelector("tbody");
      Array.from(tbody.querySelectorAll("tr"))
        .sort(
          comparer(
            Array.from(th.parentNode.children).indexOf(th),
            (this.asc = !this.asc)
          )
        )
        .forEach((tr) => tbody.appendChild(tr));
    })
  );
});

document.querySelector(".close-modal").addEventListener("click", closeModal);

const studentGradesRowTemplatePopulator = (account) => {
  return `
    <tr>
      <td><img src="${account.icon}" alt="${
    account.firstName
  } Image" style="border-radius: 100px; margin-left: 2.5rem; background-color: #009578;
      border:3px solid #009578;    
      height:6.5rem;
      border-radius:50%;
      -moz-border-radius:50%;
      -webkit-border-radius:50%;
      width:6.5rem;"></td>
      <td>${account.firstName}</td>
      <td>${account.lastName}</td>
      <td>
      <div class="dropdown">
    <button class="dropbtn">Select Subject</button>
    <div class="dropdown-content">
      <a class="subject" href="#">${Object.keys(account.classes)[0]}</a>
      <a class="subject" href="#">${Object.keys(account.classes)[1]}</a>
      <a class="subject" href="#">${Object.keys(account.classes)[2]}</a>
      <a class="subject" href="#">${Object.keys(account.classes)[3]}</a>
      <a class="subject" href="#">${Object.keys(account.classes)[4]}</a>
      <a class="subject" href="#">${Object.keys(account.classes)[5]}</a>
      <a class="subject" href="#">${Object.keys(account.classes)[6]}</a>
      <a class="subject" href="#">${Object.keys(account.classes)[7]}</a>
      </div>
    </div>
    </td>
      <td>Grade per Subject Here</td>
    </tr>
  `;
};

const studentsGradesContent = () => {
  accounts.forEach((account) => {
    classesTable.insertAdjacentHTML(
      "beforeend",
      studentGradesRowTemplatePopulator(account)
    );
  });
};
studentsGradesContent();

classesBttn.addEventListener("click", function () {
  document.querySelector(".third-table").classList.remove("hidden");
  document.getElementById("table3").classList.add("active");
  document.getElementById("table1").classList.remove("active");
  document.getElementById("table2").classList.remove("active");
});

// const subjectLinkBttn = document.querySelectorAll('.subject');

// subjectLinkBttn.forEach((bttn, index) => {
//   bttn.addEventListener('click', function() {
//     const subjectGradeValue = Object.values(accounts[0].classes);
//     console.log(index);
//   })
// });

// console.log(subjectLinkBttn)

const dropDownBttn = document.querySelectorAll('.dropbtn');

dropDownBttn.forEach((bttn, index) => {
  bttn.addEventListener('mouseover', function() {
    const selectedAccount = accounts[index].classes;
    console.log(selectedAccount)
  });
});
