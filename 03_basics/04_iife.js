// Immediately Invoked Function Expressions (IIFE)


//Because there is some problem we are having for global scope polution so for removing the global scope variable declaration or any polution we use IIFE 


(function Delta(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
} )('Deep')
