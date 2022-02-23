//const parse = require('./TicTacToe.js');

const grid = document.querySelector('.board');
const overlay = document.querySelector('.overlay');
const winner = document.querySelector('.winner');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');

const game = new TicTacToe();

let volume = 0.8;


const playsound = function(id){
    link = `./sounds/${id}.wav`;
    const audio = document.createElement('audio');
    audio.src = link;
    audio.volume = volume;
    audio.play();
};

grid.addEventListener('click' , (e) => {
    if (e.target.nodeName == 'LI' || e.target.parentNode.nodeName == 'LI'){
        const location = e.target.id || e.target.parentNode.id ;
        console.log(location);
        try {
            game.update(location);
            updateUI(location,game.turn);
            playsound('click');
            game.changeTurn();
            handlewin(game.checkWin());
            updateIndicators(game.turn);
        } catch (error) {
            console.log(error);
            // error handling here
        }
    }

    
});

const updateUI = (location , turn) => {
    const li = document.getElementById(location);
    const img = li.children[0];
    const filename = turn.toLowerCase();
    img.src = `./img/${filename}.svg`;
    //unhide the image
    img.classList.remove("hidden");
    //remove hover effects once cell is filled
    li.classList.remove("hover:scale-105");
    li.classList.remove("hover:bg-green-300");
    //add color depending on x or o;
    li.classList.remove("bg-cyan-300");
    if (turn == 'X'){
        li.classList.add("bg-amber-300");
    } else {
        li.classList.add("bg-rose-300");
    }

};

const updateIndicators = (turn) => {
    if (turn == 'X'){
        player1.classList.add('scale-110');
        player2.classList.remove('scale-110');
        player1.classList.add('shadow-white');
        player2.classList.remove('shadow-white');
    } else {
        player2.classList.add('scale-110');
        player1.classList.remove('scale-110');
        player2.classList.add('shadow-white');
        player1.classList.remove('shadow-white');
    }
};

const handlewin = (win) => {
    if (win === 'X'){
        displayOverlay(win);
        stopGame();
    } else if (win === 'O'){
        displayOverlay(win);
        stopGame();
    } else if (win === 'Draw'){
        displayOverlay(win);
        stopGame();
    } else {
        win = game.checkWin();
    }

}

const stopGame = () => {
    grid.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
    } );
};

const displayOverlay = (win) => {
    let text = '';
    if (win == 'X'){
        text = 'Player 1 Wins! 🏆';
        playsound('win');
    } else if (win == 'O'){
        text='Player 2 Wins! 🏆';
        playsound('win');
    } else if (win == 'Draw'){
        text= "It's a Tie! 🪢";
        playsound('error');
    } 
    winner.innerText = text;
    console.log(winner);
    overlay.classList.remove("hidden");
    overlay.classList.add("flex");
    overlay.classList.replace("opacity-0","opacity-100"); 
};