const accountId = 12345
// to make it constant and don't change 
let accountEmail = "ritwik@gmail.com"
var accountPass = "123412"
// prefer not to use var due the issue of block scope & functional scope
accountCity = "Jaipur"
//not to use but in js above type var can also be declared

let accountState; // to see if wee didn't assign any values (undefined)
// use of ; is not a compulsion

acountId = 2
//to check whether its changing
console.log(accountId);//not allowed to change
// try changing other 
accountEmail = "rish@gmail.com"
accountPass = "1692662"
accountCity = "BBSR"

console.log(accountEmail);
console.log(accountPass);
console.log(accountCity); // all getting changed


//another easy way to print all these (it creates a table as well) 
console.table([accountId, accountEmail, accountPass, accountCity, accountState]);
//acnt state undefined

/* in js there was an issue of scope usage
if() { } the curly braces are scopes 
what happened is once the variable somewhere else is used all the variables 
used to chang. To eliminate that issue let fun was introduced which was not affected by the
declartation/use of same name inside those scopes  
modern day only Let & Cosnt no Var */

