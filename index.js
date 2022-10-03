// Single responsibilty :
import generateResult from "./verdict.js"
class Result {
  constructor(name, marks) {
    this.name = name
    this.marks = marks
  }
  addMarks(score) {
    this.marks += score
    console.log(`Total marks uptill now ${this.marks}`)
  }
}

class giveOp {
  constructor() {
    // this.result = new Result(student1.name, student1.marks)
    // this.result = new Result({ ...student1 })
    this.result = { ...student1 }
  }
  generateResult1() {
    if (this.result.marks > 500)
      console.log("Yeppy! You have passed the exam!!")
    else console.log("Oh boy! You have failed the exam!!")
  }
}
const student1 = new Result("Ravi", 340)
student1.addMarks(300)
const g1 = new giveOp(student1)
g1.generateResult1()

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
