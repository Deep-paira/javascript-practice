//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20

    // console.log("INNER: ", a);
    
}


// console.log(a);
// console.log(b);
// console.log(c));

function one() {
    const username = "Deep"

    function two () {
        const website = "Instagram"
        console.log(username)
    }
   // console.log(website)
    two()
}
//one()

if (true) {
    const username = "Deep"
    if (username === "Deep") {
        const website = " youtube"
         console.log(username + website);
    }
    // console.log(website);
}

 //console.log(username);



 // +++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++



console.log(addone(5))                       // No error because it's a function

function addone(num){
    return num + 1
}



addTwo(5)                                    // (Cannot access 'addTwo' before initialization) this is the error.
const addTwo = function(num){
    return num + 2
}