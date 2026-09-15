// FOR LOOP + FUNCITON PRACTICE //

// function num(number) {

//     for (let i = 1; i <= number; i++){
//         console.log(i);
        
//     }
// }
// num(10);

// // =================================== //

// function sumOfNum(numOne, numTwo) {

//     for (let i = 1; i <= numOne; i++) {

//         console.log(numTwo + i);
        
//     }
// }
// sumOfNum(5, 10);

// // =================================== //

// // WHILE LOOP + FUNCTION PRACTICE //

// function myFunction() {

//     let cars = ["Honda", "Corolla", "Civic", "Bmw", "Audi"];
//     let i = 0;

//     while ( i < cars.length ) {
//         console.log(cars[i]);

//         i++
//     }
// }

// myFunction();

// // =================================== //

// function sumOfNum(limit) {

//     let i = 1;
//     let sum = 0;

//     while ( i <= limit ) {

//         sum = sum + i
//         i++
//     }

//     return sum
// }

// sumOfNum(5)

// let result = sumOfNum(5)
// console.log(result);


// // DO WHILE LOOP + PRACTICE //

// function cars() {

//     let userCars = ["Corolla", "Honda", "Civic", "Bmw", "Audi"];
//     let i = 0;

//     do{
//         console.log(userCars[i]);
//         i++

//     } while ( i < userCars.length );

// }

// cars()

// // =================================== //

// function sumOfNumber(numLimit) {

//     let i = 1;
//     let sum = 0;

//     do{
//         sum = sum + i
//         i++

//     } while ( i <= numLimit);

//     return sum

// }
// sumOfNumber(5)

// let resultOfSumNum = sumOfNumber(5);
// console.log(resultOfSumNum);


// =================================== //

function oddNum(oddNumber) {

    let i = 1;

    do {
        

        if ( i %2 !== 0) {

            console.log(i);
            
        }

        i++
        

    } while ( i <= oddNumber );

}

oddNum(20);

// I HOPE SO ITNA KAFI HOGA //