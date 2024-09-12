




// SOLUTION 

let number = 5;

function createCounter (init) {

    init = number;

    return {
        increament : () => {
            return init;
        },

        decreament : () => {
            init--
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
