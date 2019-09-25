import './style.css';
import DrumMP3 from './drum.mp3';
import ErrorMP3 from './error.mp3';
import successMP3 from './woohoo.wav'

function component(){
    const element = document.createElement('div');
    element.id = 'content';
    
    const drumSound = new Audio();
    drumSound.src = DrumMP3;
    element.appendChild(drumSound);

    const successSound = new Audio();
    successSound.src = successMP3;
    element.appendChild(successSound);

    const errorSound = new Audio();
    errorSound.src = ErrorMP3;
    element.appendChild(errorSound);

    const drum = document.createElement('h1');
    drum.innerHTML = "Drum";

    const error = document.createElement('h1');
    error.innerHTML = "Error";
    
    const success = document.createElement('h1');
    success.innerHTML = "Success";

    drum.addEventListener('click', () => {
        drumSound.play();
    });

    success.addEventListener('click', () => {
        successSound.play();
    });

    error.addEventListener('click', () => {
        errorSound.play();
    });

    element.appendChild(drum);
    element.appendChild(success);
    element.appendChild(error);
    
    return element;
}

document.body.appendChild(component());