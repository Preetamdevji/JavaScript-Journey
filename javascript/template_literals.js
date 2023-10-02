// This is old method 

for (let num = 1; num <= 10; num++){
var tableof = 12
console.log(tableof + " x " + num + " = " + tableof * num);
}

// And this is called template literals

for (let num = 1; num <= 10; num++){
    var tableof = 12
    console.log( `${tableof} x ${num} = ${tableof * num}` );
    }
    