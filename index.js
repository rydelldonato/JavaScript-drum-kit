//playSound function with take in the current event (e) as a paraemeter
function playSound(e){
    //this function will play the corresponding audio file to the event, in this case its a keydown, and add a class to that specific key for visual effects
    //the variable 'audio' contains a function that will find the audio code in HTML that correseponds to the same data-key value as the event's keyCode
    //in other words, audio's value is the corressponding HTML element whose data-key value matches the current event's keyCode because..(in this case the event is 'keydown')
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //the variable 'key' will select the HTML elements with the 'key' class that corresponds with the keydown event's keyCode
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    //stop the function from running all together if key pressed doesn't exist on the page
    if(!key) return;
    //this will rewind the audio file to the start
    audio.currentTime = 0;
    //this allows the audio file associated with the pressed key to play
    audio.play(e);
    //this adds a class to a specific given class of elements
    key.classList.add('playing');
}

function removeTransition(e){
    //the removeTransition function will take in the current event as the parameter and will remove the class that was added in the playSound function
    //skip it if its not a transform event
    if(e.propertyName !== 'transform') return;
    //because we have an eventListener, 'this' will equal the object we're listening and we're removing the 'player' class from it
    this.classList.remove('playing');
}

//the keys variable will contain an array of all the HTML elements with the .key class
let keys = document.querySelectorAll('div.key');
//this will loop through each key within the keys array and for each, listen for the transitionend event, then run the removeTransition function
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


//this code block listens for any keydown events in the browser window, then runs the playSound function
window.addEventListener('keydown', playSound);
