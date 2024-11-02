




// SOLUTION 

let number = 5;

function createCounter (init) {

    let number = init;

    return {
        increament : () => {
            number += 1;
            return init;
        },

        decreament : () => {
            number -= 1
            return init;
        },

        reset : () => {
            init;
            return init;            
        }
    }

}



createCounter(5);
createCounter(5).increament
createCounter(5).decreament
createCounter(5).reset
