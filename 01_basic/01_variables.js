const accountId = 144553
let accountEmail = "deeppaira45@gmail.com"
var accountPassword = "12345"
accountCity = "Barabhum"
let accountState;

// accountId = 2 || not allowed.

accountEmail = "deeppaira@gmail.com"
accountPassword = "21212121"
accountCity = "purulia"

console.log(accountId);

/*
Prefer not to use var.
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])