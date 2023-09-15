const receivesAFunction = callback => callback();

const returnsANamedFunction = () => function returnedFunction() {
    console.log("Returned.");
};

const returnsAnAnonymousFunction = () => () => console.log("Returned.");