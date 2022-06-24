class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}


// let json = '{ "name": "Yoda", "age": 20 }';
let json = '{ bad json }';
// let json = '{ "age": 20 }';

try {
    let user = JSON.parse(json);

    // if (!user.name) {
    //     throw new SyntaxError("name is required!");
    // }

    if (!user.name) {
        throw new ValidationError("'name' is required.");
    }
    if (!user.age) {
        throw new ValidationError("'age' is required.");
    }

    errorCode;// contoh error

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    // console.log(error.name);
    // console.log(error.message);
    // console.log(`JSON Error: ${error.message}`);



    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}