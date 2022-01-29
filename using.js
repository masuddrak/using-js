
// function addition 1-5 number
function addNumber(number){
    let addition=0;
    for(let i=1; i<=number; i++){
        addition=addition+i;
    }
    return addition;
}
const result=addNumber(5);
console.log(result);