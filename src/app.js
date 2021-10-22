console.log("Hello World")

let krediler = ["Konut Kredisi", "Taşıt Kredisi", "İhtiyaç Kredisi"]

for (let index = 0; index < krediler.length; index++) {
    console.log(krediler[index])  
}

let student = {id:1, name: "Hatice"}


function save(puan = 10, student) {
    console.log(student.name + " : " + puan)
}

save(undefined, student)

let students = [student, {id:2, name: "Abc"}]
console.log(students)
