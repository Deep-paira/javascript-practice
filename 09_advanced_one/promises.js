
//promiseOne :
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network

        setTimeout(function(){
            console.log('Async task is compelete');
            resolve()
        },1000)
})

promiseOne.then(function(){
        console.log("Promise consumed");
})


//promiseTwo :
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)

}).then(function(){
    console.log("Async 2 resolved");
})


//promiseThree :
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Delta", email: "delta@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


//promiseFour :
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true 
        if (!error) {
            resolve({username: "Delta", password: "543"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))


//promiseFive :
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

//Or by Async Function

async function consumePromiseFive() {
    try {
        const responce = await promiseFive 
        console.log(responce)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() //fomatting to JSON it take time so we have to use "await" keyword here
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()



//Doing the same thing in .then .catch() format : 

fetch('https://api.github.com/users/hiteshchoudhary')
.then((responce) => {
    return responce.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))
