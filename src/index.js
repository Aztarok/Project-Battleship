import "./styles.css";
import { game } from "./battleship.js";
import { domainToUnicode } from "url";
let handler = function(e) {
    showCurrentShip(e);
}
let board = document.querySelector(".board");
function createBoard() {
    for (let i = 0; i < 10; i++) {
        let row = document.createElement("div");
        row.classList.add("rows");
        for (let j = 0; j < 10; j++) {
            let col = document.createElement("div");
            col.classList.add("col");
            col.pos = [i, j];
            
            col.addEventListener("mouseenter", handler);
            row.appendChild(col);
        }
        board.appendChild(row);
    }
}
createBoard();
let currentObj = {
    length: 5,
};
let total = [];

function showCurrentShip(e) {
    if (currentObj.length === 5) {
        total = [];
        showShip(e, currentObj.length);
        placeShip(e);
    }
    if (currentObj.length === 4) {
        total = [];
        showShip(e, currentObj.length);
        placeShip(e);
    }
}


function showShip(e, length) {
    
    for (let i = 0; i < length; i++) {
        
        let current = document.elementFromPoint(e.clientX, e.clientY + (i * 50));
        if (current.hasOwnProperty("pos")) {
            total.push(current);
            current.classList.add("red");
        }
        current.addEventListener("mouseleave", hideShip);
    }
}

let hideShip = () => {
    for(let i = 0; i < total.length; i++) {
        let wows = total[i];
        wows.classList.remove("red");
    }
}


function placeShip(e) {
    let box = e.target;
    box.addEventListener("click", () => {
        for (let i = 0; i < total.length; i++) {
            let current = total[i];
            current.removeEventListener("mouseleave", hideShip);
            currentObj.length--;
        }
    })
}