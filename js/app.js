console.log("Ryan McDonough")

let num1 = 25;
let num2 = 30;
let heading1 = document.getElementById('heading1');
/*console.log('document1')*/

if(null !== 25) {
    heading1.innerHTML = "We have " + num1 + " days to go";
}

else{
    heading1.innerHTML = "We don't have " + num2 + " days to go";

}