// ____________________________ Error Handling In JavaScript ______________________________

// Pretend that this response is coming from server


// Throwing Custom Error

let a = null;
if (a == null) {
    // throw new Error("Your data is empty")  // This will throw error because a is null 
} else {
    console.log('Your response is running');  // If error not occured
}

// Try & Catch

try {
    func()  // Catch will run because this function is not declared
} catch (error) {
    console.log(error.name); // This will show you which type of error occured
    console.log(error.message); // This will show you the message of error
    console.log(error.stack);  // This will show you full error
} finally {  // This will run after try or catch
    console.log('Thanks for using try and catch');
}
















