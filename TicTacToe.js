class TicTacToe {
    constructor(){
        this.grid = ['','','','','','','','',''],
        this.turn = 'X',
        this.turnCount = 0,
        // 1 is 'x' 2 is 'o'
        this.state = 'blank',
        this.winner = ''
    }
    
    update(location){
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

    checkWin(){
        const winstates = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[1,2,7],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
        let roundwin = false;
        for (let i=0;i < winstates.length ; i++){
            const condition = winstates[i];
            //console.log(condition);
            let a = this.grid[condition[0]];
            let b = this.grid[condition[1]];
            let c = this.grid[condition[2]];
            console.log(condition);
            if (a === '' || b === '' || c === ''){
                continue;
            }
            if (a === b && b === c){
                this.winner = a;
                roundwin = true;
                break;
            } 
        }

        if (roundwin){
            return this.winner;
        }
        
        if (this.isGridFull()){
            this.winner = 'Draw';
            return this.winner;
        }
    }

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