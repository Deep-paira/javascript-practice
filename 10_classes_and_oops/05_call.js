function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)  //".call" to access
   
    this.email = email
    this.password = password
}

const Delta = new createUser("Delta", "delta@fb.com", "543")
console.log(Delta);