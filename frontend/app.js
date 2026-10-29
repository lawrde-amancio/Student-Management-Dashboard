import { getStudentsAPI, addStudentsAPI } from '../api.js';

let localStudent = [];

const studentForm = document.querySelector("#studentForm");
const studentTableBody = document.querySelector("#studentTableBody");

const renderTable = (dataArray) => {
    studentTableBody.innerHTML = '';

    if (!dataArray || dataArray.length === 0) {
        studentTableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center;">No student records found.</td>
      </tr>
    `;
        return;
    }

    dataArray.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${student.firstName}</td>
          <td>${student.lastName}</td>
          <td>${student.email}</td>
        `;
        studentTableBody.appendChild(row);
    });
};

studentForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const firstName = document.querySelector('#firstName').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#email').value.trim();

    if (!firstName || !lastName || !email) {
        alert('All input fields must be filled out.');
        return;
    }

    const studentData = { firstName, lastName, email };

    await addStudentsAPI(studentData);
    localStudent = await getStudentsAPI();

    renderTable(localStudent);
    studentForm.reset();
});


const initApp = async () => {
    localStudent = await getStudentsAPI();
    renderTable(localStudent);
};

document.addEventListener('DOMContentLoaded', initApp);