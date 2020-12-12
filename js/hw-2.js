// let hobby = 'Chess';
// console.log(hobby);
// hobby = 'Fishing'
// console.log(hobby);



// console.log(5 && 15 && undefined && 100)

// console.log('qwerty'.indexOf('b'));
// console.log(true && 5 > 3 && "javascript");
// console.log('qwerty'.includes('b'));


// ================================ FOR --- Цикл, который считает сумму составляющих любого числа==================
//  ================================5=5+4+3+2+1=15
let userInput = prompt('Введите число');
userInput = Number(userInput);
let result = 0;
for(let i = 1; i <= userInput; i += 1) {
    // console.log(i);
    result += i; 
}
 console.log(`Total = ${result}`);
//  =============================================================