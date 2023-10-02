// Difference btw var , let and const

// First we work we var

function biodata() {
    var myFirstName = "Preetam";
    console.log(myFirstName);

    if(true){
        var myLastName = "Devji Kesu Mandavia";
        console.log('inner :' + myFirstName);
        console.log('inner :' + myLastName);
    }
        console.log('innerOuter :' + myFirstName + myLastName);
};

biodata();


// Second we work we let

function biodata() {
    let myFirstName = "Preetam";
    console.log(myFirstName);

    if(true){
        let myLastName = "Devji Kesu Mandavia";
        console.log('inner :' + myFirstName);
        console.log('inner :' + myLastName);
    }
        console.log('innerOuter :' + myFirstName + myLastName);   // let is block-scope and its cannot work out of block the curly bracket means that is block if we use let.
};

biodata();

// Third we work we const

function biodata() {
    const myFirstName = "Preetam";
    console.log(myFirstName);

    if(true){
        const myLastName = "Devji Kesu Mandavia";
        console.log('inner :' + myFirstName);
        console.log('inner :' + myLastName);
    }
        console.log('innerOuter :' + myFirstName + myLastName);   // const is block-scope and its cannot work out of block the curly bracket means that is block if we use const.
};

biodata();
