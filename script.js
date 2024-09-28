   
   // const studentRecords = [];

   const student = {
    "firstName": 'John',
    "lastName": "Doe",
     "id": "OOF-12"
   }

   // studentRecords.push(student);

   // console.log(studentRecords)


   function alertSomething(){
      var add = 2 + 2
      alert(add)
    //   return add

   }

   function changeDay(){
      const dateElement = document.getElementById('dateText').innerHTML = 'Today is Sunday';
      dateElement.style.fontSize = "20px";
      dateElement.style.color = "green";
      dateElement.style.fontWeight = '700';
   }

   function signUp(){
      const displayElement = document.getElementById('displayName');
      const firstName = document.getElementById('fname').value;
      // const parsedName = Number(firstName)
      const lastName = document.getElementById('lname').value;
   
      displayElement.innerHTML = `This is my name: ${firstName} ${lastName}`
      // alert('This is my name:' + firstName + lastName)
      // alert(`This is my name: ${firstName} ${lastName}`)
      // console.log(firstName)
      // console.log(lastName)

   }



   function addition (a,b){
      var sum = a + b;
      return sum ;

      // return a +b ;
   }

  
   console.log(addition(2,7))
 
  
// Javascript Array Methods

const studentRecords = [
   {
      "firstName": "John",
      "lastName": "Doe",
      "id": "OOF-12",
      "age": 20
   },
   {
      "firstName": "Jane",
      "lastName": "Doe",
      "id": "OOF-13",
      "age": 22
   },
   {
      "firstName": "Sam",
      "lastName": "Doe",
      "id": "OOF-14",
      "age": 20

   }
]

// console.log(studentRecords[0].lastName,studentRecords[0].firstName)
// Map Method
// studentRecords.map()
studentRecords.map((eachStudent)=>{
  const displayElement =  document.getElementById('displayStudentRecords');
   // displayElement.innerHTML += `<p>${eachStudent.firstName} ${eachStudent.lastName} ${eachStudent.id}</p>`
   displayElement.innerHTML += `
   <p>FirstName: ${eachStudent.firstName}</p>
    <p>LastName: ${eachStudent.lastName}</p>
   `

})

const filteredStudents = studentRecords.filter((eachStudent)=>{
   return eachStudent.age === 20
})

console.log("Filtered Students",filteredStudents)

// function studentsArray(){
   
// }
// const studentArray =()=> console.log(student)

console.log(studentRecords)

  












// Index will always start counting from 0
// Length counts from 1