// functional factorial
function factorial(number){
    let fact=1;
    for(let i=number; i>=1; i--){
        fact=fact*i;
    }
    return fact;
}
let num=4;
let result=factorial(num);
console.log(result);