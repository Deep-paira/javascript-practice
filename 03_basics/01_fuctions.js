function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");

}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sumit"){
    if(!username){
        console.log("PLease enter a valid username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Deep"))

function calculateCartPrice(val1, val2, ...num1){                 //(....num1) is the "Rest operator"
    return num1
}

 console.log(calculateCartPrice(200, 400, 500, 2000))

 const user = {
    username: "Deep" ,
    price: 199
 }

 function handleobject(anyobject) {
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
    
 }

  ///handleobject(user)

  handleobject({
    username: "Sumit",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]));