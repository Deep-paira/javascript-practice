const user = {
    username: "Deep",
    price: 999,

    welcomMessage:  function () {
        console.log(`${this.username},welcome to the website`)
        //console.log(this);
        
    }
}

// user.welcomMessage()
// user.username = "sumit"
// user.welcomMessage()

// console.log(this);                // Empty object 


// function Delta () {
//     let username = "Deep"
//     console.log(this.username);
// }

// Delta()


// const Delta = function () {
//     let username = "Deep"
//     console.log(this.username);
// }



const Delta = () => {
    let username = "Deep"
   // console.log(this);
}

// Delta()


// const addTwo = (num1, num2) => {
//     return num1 + num2                                       //this is explicit return where we use {} these parenthesis we have to use the 'return' keyword
// }

// console.log(addTwo(5,10));                         


// const addTwo = (num1, num2) =>  num1 + num2                 //(Another method) 

// const addTwo = (num1, num2) => ( num1 + num2 )              // this method called implicit return where we don't need to use the 'return' keyword 

// console.log(addTwo(5,10));  

const addTwo = (num1, num2) => ({username: "Deep"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()