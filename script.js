//Needs to be 3 sets of data
//Use multiple arrays to randomly access an array's elements. (Using an object might be better to store the arrays) This could be eyeColor, hairColor and likesTo.
//Use a function to handle the overall formatting and display of the rendomized message.

//Get the random value from each array in the object.
//Combine that with the message that does not change.
//Need to use Math.floor(Math.random(ARRAY.length))

const randomMessage = () => {
    const randomMessageData = {
        eyeColor: ["Hazel", "Blue", "Green", "Amber", "Gray", "Brown", "Red/Violet"],
        hairColor: ["Brunette", "Blonde", "Black", "Red", "Gray", "White"],
        likesTo: ["Cycle", "Swim", "Dance", "Run", "Jog", "Climb", "Ski", "Read", "Cook", "Paint", "Draw", "Sing", "PLay Football"]
    };
    const randomOutputEyeColor = randomMessageData.eyeColor[Math.floor(Math.random() * 7)].toLowerCase();
    const randomOutputHairColor = randomMessageData.hairColor[Math.floor(Math.random() * 6)].toLowerCase();
    const randomOutputLikesTo = randomMessageData.likesTo[Math.floor(Math.random() * 13)].toLowerCase();

    console.log("Your Soul Mate:");
    console.log(`Has ${randomOutputEyeColor} coloured eyes.`);
    console.log(`Appears to have natural ${randomOutputHairColor} hair.`);
    console.log(`Liked to ${randomOutputLikesTo} for fun!`);
}
randomMessage();