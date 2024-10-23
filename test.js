let rightBtn = document.getElementById('rightbtn');
let leftBtn = document.getElementById('leftbtn');
let professional = document.getElementById('professional');
let travelblog = document.getElementById('travelblog');
let happytails = document.getElementById('happytails')

let appState = { state: 0 };


rightBtn.addEventListener('click', handleStateRight);
leftBtn.addEventListener('click', handleStateLeft);

function handleStateRight(){
    if (appState.state === 0) {
        professional.classList.remove('slideleftin')
        professional.classList.add('slideleft');
        travelblog.classList.add('sliderightin');
        travelblog.style.display = "block";
        appState.state = 1;
    }

    else if (appState.state === 1) {
        travelblog.classList.remove('sliderightin');
        travelblog.classList.add('slideleft');
        happytails.classList.add('sliderightin');
        happytails.style.display = "block";
        appState.state = 2;

        setTimeout(() => {
            travelblog.style.display = "none";
        }, 2000);
    }
    
    else {
        return;
    }

}

function handleStateLeft(){
    if (appState.state === 1) {
        professional.classList.add('slideleftin');
        professional.classList.remove('slideleft');
        travelblog.classList.add('slideright');
        travelblog.classList.remove('sliderightin');
        appState.state = 0;

        setTimeout(() => {
            travelblog.style.display = "none";
        }, 2000);

    }

    else if (appState.state === 2) {
        travelblog.classList.remove('slideleft');
        travelblog.classList.add('slideleftin')
        happytails.classList.add('slideright')
        happytails.classList.remove('sliderightin')
        travelblog.style.display = "block";
        appState.state = 1;

        setTimeout(() => {
            happytails.style.display = "none";
        }, 2000);
    }

    else {
        return;
    }

}


