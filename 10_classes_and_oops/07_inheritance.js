class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
        addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const delta = new Teacher("delta", "delta@teacher.com", "578")
delta.logMe()

const deep = new User("deep")
deep.logMe()

console.log(delta instanceof User)