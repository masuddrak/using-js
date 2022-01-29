// functional factorial
function factorials(numbers){
    let fact=1;
    for(let i=1; i<=numbers; i++){
        fact=fact*i;
    }
    return fact;
}

let num=3;
let result=factorials(num);
console.log(result);