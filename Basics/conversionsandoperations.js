let age = 23 

console.log(typeof 23)


let valueInNumber = Number(age)

let age2 = '23and'

let value = Number(age2)
// console.log(typeof valueInNumber);// Number 
// console.log(typeof value);// Number 
// console.log(value)


// "33" => 33 
// '33abc' => Nan 
// true => 1; false => 0
// "" => false
//'ranga' => true 

//****** OPERATIONS ****** 

let number = 5 
let negValue = -number 
console.log(negValue)//-5

// console.log('1' + 2 ) // 12
// console.log(1 + '2') // 12
// console.log("1" +2 + 2); // 122 
// console.log(1 + 2 + "2") // 32
// console.log(+true)//1
// console.log(+'')//0

console.log("2" > 1)// true 
console.log('02' > 1)// true

console.log(null > 0);//  false
console.log(null == 0);// false
console.log(null >= 0 ); // true 
// The reason is that equality check == and comparisons <= work differently. 
// comparisons convert null to a number, treating it as 0 
// thus why  null >= 0 is true and null > 0;
