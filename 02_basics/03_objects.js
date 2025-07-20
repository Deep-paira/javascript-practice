// +++++++++++++++ Singleton +++++++++++++++++++++
//object.create 


//object literals..

const mySym = Symbol("key1")

const Jsuser = {
    name : "Deep",
    "full name": "Deep paira",
     [mySym]: "mykey1",
    age: 18,
    location: "Purulia",
    email: "deep@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym])


Jsuser.email = "Deep@chatgpt.com"
//Object.freeze(Jsuser)
Jsuser.email = "Deep@microsoft.com"
//console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //this is called String Interpolation.
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());