class Ship {
    constructor(length, hits = 0, sunk = false, position = [0, 0]) {
        this.length = length;
        this.sunk = sunk;
        this.hits = hits;
    }

    hit() {
        this.hits = this.hits + 1;
    }
    isSunk() {
        if (this.hits === this.length) {
            console.log("Done");
        }
    }
}

class GameBoard {
    constructor(board = [10, 10]) {
        this.board = board;
        this.carrierLoc = [];
        this.battleshipLoc = [];
        this.destroyerLoc = [];
        this.submarineLoc = [];
        this.patrolLoc = [];
        this.allShips = [this.carrierLoc, this.battleshipLoc, this.destroyerLoc, this.submarineLoc, this.patrolLoc];
    }
    carrier(x, y) {
        for (let i = 0; i < 5; i++) {
            this.carrierLoc.push([x+i, y])
        }
        return new Ship(5);
        
    }
    battleship(x, y) {
        for (let i = 0; i < 4; i++) {
            this.battleshipLoc.push([x+i, y])
        }
        return new Ship(4);
    }
    destroyer(x, y) {
        for (let i = 0; i < 3; i++) {
            this.destroyerLoc.push([x+i, y])
        }
        return new Ship(3);
    }
    submarine(x, y) {
        for (let i = 0; i < 3; i++) {
            this.submarineLoc.push([x+i, y])
        }
        return new Ship(3);
    }
    patrol(x, y) {
        for (let i = 0; i < 2; i++) {
            this.patrolLoc.push([x+i, y])
        }
        return new Ship(2);
    }
    hitCheck(x, y) {
        let check = JSON.stringify([x, y]);
        for (let i = 0; i < 5; i++) {
            let ship = JSON.stringify(this.allShips[i]);
            let checked = ship.indexOf(check);
            if(checked != -1) {
                console.log("Yes");
                break;
            }
        }
    }
}
let game = new GameBoard();
let carrier = game.carrier(5, 2);
let battleship = game.battleship(3, 7);
let destroyer = game.destroyer(6, 9);
let submarine = game.submarine(3, 4);
let patrol = game.patrol(1, 10);
game.hitCheck(2, 10);

// export { game };