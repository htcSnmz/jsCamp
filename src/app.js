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


//rest
let showProducts = function name(id, ...products) {
    console.log(id)
    console.log(products)   
}
// console.log(typeof showProducts)
showProducts(10, "Elma", "Armut", "Karpuz")


//spread
let points = [1,2,3,4,50,7,100,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC", "D",..."EFG", "H")

//destructuring
let populations = [10000, 20000, 30000, [40000, 50000]]
let [small, medium, high, [veryHigh, maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small], number){
    console.log(small)
}

someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category["id"])

let {id, name} = category
console.log(id)
console.log(name)