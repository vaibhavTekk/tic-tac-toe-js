//const parse = require('./TicTacToe.js');

const grid = document.querySelector('.board');

const game = new TicTacToe();

grid.addEventListener('click' , (e) => {
    if (e.target.nodeName == 'LI' || e.target.parentNode.nodeName == 'LI'){
        const location = e.target.id || e.target.parentNode.id ;
        console.log(location);
        try {
            game.update(location);
            updateUI(location,game.turn);
            game.changeTurn();
            game.checkWin();
            console.log(game.winner);
        } catch (error) {
            console.log(error);
            // error handling here
        }
        console.log(game.isCellFull(location));
        console.log('grid is full:',game.isGridFull());
        console.log(game.grid);
        console.log(game.turn);
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