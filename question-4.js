/**
 * The developer that wrote the code below tried to make it so that it doesn't get into the 'INITIALISING' block twice.
 * 
 * Besides the obvious answer that the initialise function is called twice, explain what is going wrong.
 * Add your explanation as a comment here:
 * 
 *  what si going wrong is we call the function initialise twice and the second call after 100 ms , and this is not enough , because
 *  the function need 1000 ms to  INITIALISED 
 * 
 * 
 * 
 * Now the developer has asked you how you would solve the problem. As mentioned in the comments they cannot change the time it takes to run the lines.
 * Explain to them what they should do in the comment here:
 * 
 *  they have too add conditiion if the second call is happend direct or in time less than the 1000 ms 
 *  then they add to the next call the total time (let the first call finish and the call the function again )
 *  in this case the output will be
 *      INITIALISING
        INITIALISED
        ALREADY INITIALISED
 * 
 */

// REMINDER: DO NOT ACTUALLY CHANGE THE CODE BELOW
let alreadyInitialised = false;

const initialise = () => {
    if (alreadyInitialised) {
        console.log('ALREADY INITIALISED');
    } else {
        console.log('INITIALISING');
        setTimeout(() => {
            // Run initialisation code!
            console.log('INITIALISED')
            alreadyInitialised = true;
        }, 1000); // The developer cannot change the 1000 number in the timeout
    }
}

/** The developer cannot change this code! */
initialise();
setTimeout(initialise, 100);