const accountId = 144553
let accountEmail = "sagr@gmail.com"
var accountPassword = "12345"
/*
prefer not to use var bez of issuing in block code and scope 
*/
accountCity = "munger"
let accountState ;

// accountId = 2  not allowed

accountEmail = "hc@gmail.com"

accountPassword = "2345"

accountCity = "jmp"

console.log(accountId);
console.table([accountEmail , accountPassword , accountCity, accountState])