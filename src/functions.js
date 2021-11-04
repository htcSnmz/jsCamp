function addToCart(quantity, productName = "Elma"){
    console.log("Sepete Eklendi: " + productName + " adet: " + quantity)
}

addToCart()
addToCart(10, "Yumurta")


let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2!")
}

sayHello2()

let product1 = {productName: "Elma", unitPrice:     10, quantity: 5}

function addToCart2(product) {
    console.log("Sepete eklendi: " + product.productName)
}


addToCart2(product1)

let product2 = {productName: "Elma", unitPrice:     10, quantity: 5}
let product3 = {productName: "Elma", unitPrice:     10, quantity: 5}
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)

function addToCart3(products) {
    console.log(products)
}

let products = [
    {productName: "Elma", unitPrice:     10, quantity: 5},
    {productName: "Armut", unitPrice:     10, quantity: 5},
    {productName: "Karpuz", unitPrice:     10, quantity: 5},

]

addToCart3(products)

function add(...numbers) {  // rest
    console.log(numbers)
}

add(20,30)
add(20,30,40)
add(20,30,40,50)

console.log(Math.max(30,10,600,40))

let numbers = [30,10,600,40]

console.log(Math.max(...numbers))  //spread