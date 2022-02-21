class TicTacToe {
    constructor(){
        this.grid = ['','','','','','','','',''],
        this.turn = 'X',
        this.turnCount = 0,
        // 1 is 'x' 2 is 'o'
        this.state = 'blank',
        this.winner = ''
    }
    
    update(location , turn){
        if (this.grid[location] === ''){
            this.grid[location] = this.turn;
            this.turnCount += 1;
        } else {
            throw "Cell Already Filled !";
        }
    }

    changeTurn(){
        if (this.turn === 'X'){
            this.turn = 'O';
        } else if (this.turn === 'O') {
            this.turn = 'X';
        }
    }

    // checkWin(){
    //     const winstates = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[1,2,7],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
    //     winstates.every((e) => {
    //         let a = this.grid[e[0]];
    //         let b = this.grid[e[1]];
    //         let c = this.grid[e[2]];
    //         if (a && b && c){
    //             if (a === b === c){
    //                 this.winner = a;
    //                 this.state = 'win';
    //                 return false;
    //             } else if (this.isGridFull()) {
    //                 this.state = 'draw';
    //                 return false;
    //             }
    //         }
    //     });
    // }

    isGridFull(){
        return !(this.grid.includes(''));
    }

    isCellFull(location){
        if (this.grid[location]){
            return true;
        } else {
            return false;
        }
    }
    
}