function findPrime(...numbers) {

    for (let i = 0; i < numbers.length; i++) {
        let isPrime = true
        let k = numbers[i]/2
        for (let j = 2; j <= k; j++){
            if(numbers[i] % j == 0){
                isPrime = false
            }
        }
        if(isPrime){
            console.log(numbers[i] + " asal sayıdır.")
        }else{
            console.log(numbers[i] + " asal sayı değildir.")
        }
    }   
}

findPrime(20, 31, 45, 4, 16, 89, 97)


function findFriendNumbers(num1, num2) {
    let k = num1/2; let total1 = 0
    let m = num2/2; let total2 = 0
    for (let i = 1; i <= k; i++) {
        if(num1 % i == 0){
            total1 += i
        }
    }
    for (let i = 1; i <= m; i++) {
        if(num2 % i == 0){
            total2 += i
        }
    }
    if (num1 == total2 && num2 == total1){
        console.log(num1 + " ve " + num2 + " arkadaş sayılardır.")
    } else {
        console.log(num1 + " ve " + num2 + " arkadaş sayı değildir.")
    }
}

findFriendNumbers(17296, 18416)

function findPerfectNumber() {  
    for(let i = 2; i <= 1000; i++){
        let total = 1
        for (let j = 2; j <= i/2; j++){
            if(i % j == 0){
                total += j
            }
        }
        if(total == i){
            console.log(i)
        }
    }
}

findPerfectNumber()

function listPrimeNumbers() {
    
    for(let i = 2; i <= 1000; i++){
       let isPrime = true;
        for(let j = 2; j < i/2; j++){
            if(i % j == 0){
                isPrime = false
            }
        }
        if(isPrime){
            console.log(i)
        }
    }
}


listPrimeNumbers()
