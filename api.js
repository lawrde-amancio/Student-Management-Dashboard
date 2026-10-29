const mockStudentDb = [
    {
        firstName: "Lawrde Darryle",
        lastName: "Amancio",
        email: "lawrde.amancio@awsys-i.com"
    },
    {
        firstName: "Francis Benedict",
        lastName: "Chavez",
        email: "francis.chavez@awsys-i.com"
    }
]

export function getStudentsAPI() {
    return mockStudentDb;
}


export function addStudentsAPI(newStudentData) {
    const savedStudent = {
    id: Date.now(), 
    ...newStudentData 
  };

  mockStudentDb.push(savedStudent);
  return savedStudent;
}
