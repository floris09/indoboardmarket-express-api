lastEvaluation = (student) => student.evaluations[student.evaluations.length-1]

function algoArray(greenStudents,yellowStudents,redStudents){
  var array = []
  if (greenStudents.length !== 0) { for (var i=0; i<1; i++){ array.push(greenStudents) } }
  if (yellowStudents.length !== 0) { for (var i=0; i<2; i++){ array.push(yellowStudents) } }
  if (redStudents.length !== 0) { for (var i=0; i<3; i++){ array.push(redStudents) } }
  return array
}

colorPicker = (theArray) => theArray[Math.floor(Math.random()*theArray.length)]

studentPicker = (arr) =>  arr[Math.floor(Math.random()*arr.length)]


const batch = {
  batchNumber: "11",
  students: [
    {name: "Jan", evaluations: ['green','yellow']},
    {name: "Piet", evaluations: ['red','red','yellow','red']},
    {name: "Klaas", evaluations: ['yellow','green','yellow']},
    {name: "Henk", evaluations: ['green', 'yellow']},
    {name: "Karel", evaluations: ['red','red','red']},
    {name: "Emma", evaluations: ['green','yellow']},
    {name: "Anna", evaluations: ['yellow']},
    {name: "Louise", evaluations: ['yellow','yellow','yellow']},
    {name: "Claar", evaluations: ['yellow','green','red']},
    {name: "Linda", evaluations: ['red','green','red']}
  ]
}

const students = batch.students.map(student => student)
const lastEvaluations = students.map(lastEvaluation)

const greenStudents = students.filter(student => lastEvaluation(student) === 'green')
const yellowStudents = students.filter(student => lastEvaluation(student) === 'yellow')
const redStudents = students.filter(student => lastEvaluation(student) === 'red')

const studentsCount = students.length
const greenCount = greenStudents.length
const yellowCount = yellowStudents.length
const redCount = redStudents.length

const greenPercentage = (greenCount/studentsCount)*100
const yellowPercentage = (yellowCount/studentsCount)*100
const redPercentage = (redCount/studentsCount)*100

const theArray = algoArray(greenStudents,yellowStudents,redStudents)
const theColor = colorPicker(theArray)
const theStudent = studentPicker(theColor)

console.log(theStudent)
