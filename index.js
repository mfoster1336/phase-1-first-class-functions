// const { spy } = chai.spy();

function receivesAFunction(spy){
    return spy()
}

function returnsANamedFunction() {
    return function someName(name) {
        return name != ''
    }
}

function returnsAnAnonymousFunction() {
    return function(){

    }
}

// const { spy } = chai.spy();

// function receivesAFunction(bologna){
//     console.log(bologna());
// }
// main();
