
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc@google`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const deep = new User("deep", "deep@gmail.com", "634")

console.log(deep.encryptPassword());
console.log(deep.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const delta = new User("delta", "delta@gmail.com", "724")

console.log(delta.encryptPassword());
console.log(delta.changeUsername());