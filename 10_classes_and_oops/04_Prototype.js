// let myName = "Deep     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let SuperHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "Web slinging",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Deep = function(){
    console.log(`Deep is present in all objects`);
}

Array.prototype.heyDeep = function(){
    console.log(`Deep says hello`);
}

// heroPower.Deep()
// SuperHeros.Deep()
// SuperHeros.heyDeep()
// heroPower.heyDeep()


// inheritance

const User = {
    name: "deep",
    email: "deep@google.com"
}

const Teacher = {
    makeVideo: true
}

 const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax..

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "CodeDrift     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Deep".trueLength()
"DELTA".trueLength()