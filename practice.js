//playSound function with take in the current event (e) as a paraemeter
    //this function will play the corresponding audio file to the event, in this case its a keydown, and add a class to that specific key for visual effects
    //the variable 'audio' contains a function that will find the audio code in HTML that correseponds to the same data-key value as the event's keyCode
    //in other words, audio's value is the corressponding HTML element whose data-key value matches the current event's keyCode because..(in this case the event is 'keydown')
    //the variable 'key' will select the HTML elements with the 'key' class that corresponds with the keydown event's keyCode
     //stop the function from running all together if key pressed doesn't exist on the page
    //this will rewind the audio file to the start
    //this allows the audio file associated with the pressed key to play
    //this adds a class to a specific given class of elements


//the removeTransition function will take in the current event as the parameter and will remove the class that was added in the playSound function
   //skip it if its not a transform event
    //because we have an eventListener, 'this' will equal the object we're listening and we're removing the 'player' class from it

//the keys variable will contain an array of all the HTML elements with the .key class
//this will loop through each key within the keys array and for each, listen for the transitionend event, then run the removeTransition function

//this code block listens for any keydown events in the browser window, then runs the playSound function
