// functional factorial
function factorials(numbers){
    let fact=1;
    let i=1;
    while(i<=numbers){
        fact=fact*i;
        i++;
    }
    return fact;
}

let num=3;
let result=factorials(num);
console.log(result);