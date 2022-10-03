// Single responsibilty :
import generateResult from "./verdict.js"
class Result {
  constructor(name, marks) {
    this.name = name
    this.marks = marks
    this.finalVerdict = "NA"
  }
  addMarks(score) {
    this.marks += score
    console.log(`Total marks uptill now ${this.marks}`)
  }
}

const student1 = new Result("Ravi", 340)
student1.addMarks(300)
generateResult(student1.marks)

// the above example is clearly violating the single responsilblity principle as here the
// class Result has 2 reasons two change 1) if we change the addMarks logic 2) when we change
// the generateResult logic. How to solve? Simply make a dedicated class to handle those
// functionality

// Confusion clearance regarding the 'this'
// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach(function (student) {
//       // Error: Cannot read property 'title' of undefined
//       console.log(this, this.title + ": " + student)
//     })
//   },
// }

// group.showList()
