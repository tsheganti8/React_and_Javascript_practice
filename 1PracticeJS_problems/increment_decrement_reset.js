var createCounter = function(init) {
    // let currentCounter = init;

    //     function increment(){
    //         return currentCounter =+1;
    //     }
    //     function decrement(){
    //         return currentCounter =-1;
    //     }
    //     function reset(){
    //         return currentCounter =init;
    //     }
    // return {increment, decrement,reset};

    let currentCounter = init;
    return{
        increment: ()=> ++currentCounter,
        decrement: () => --currentCounter,
        reset: () => init,
    }

}
