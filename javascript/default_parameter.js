function multiplication(a,b){
    return a*b;
}
console.log(multiplication(5,2));

// default parameter pass

function multiplication(a,b=5){
    return a*b;
}
console.log(multiplication(5));