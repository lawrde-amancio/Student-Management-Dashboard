const mockStudentDb = [
    {
        id: Date.now(),
        firstName: "Lawrde Darryle",
        lastName: "Amancio",
        email: "lawrde.amancio@awsys-i.com"
    },
    {
        id: Date.now() + 1,
        firstName: "Francis Benedict",
        lastName: "Chavez",
        email: "francis.chavez@awsys-i.com"
    }
];

export function getStudentsAPI() {
    return mockStudentDb;
};


export function addStudentsAPI(newStudentData) {
    const savedStudent = {
        id: Date.now() + 2,
        ...newStudentData
    }

    mockStudentDb.push(savedStudent);
    return savedStudent
};


// Test Case 1: Display the initial populated database.
console.log("Initial DB State:", getStudentsAPI());

// Test Case 2: Create a new student and display the newly added student
const newStudent = addStudentsAPI({
    firstName: undefined,
    lastName: "Jao",
    email: "sherly.jao@awsys-i.com"
});
console.log("\nReturn Saved Objects:", newStudent);

// Test Case 3: Display updated database
console.log("\nUpdated DB State: ", getStudentsAPI());
