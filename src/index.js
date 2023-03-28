import "./styles.css";
import { game } from "./battleship.js";
import { domainToUnicode } from "url";

let board = document.querySelector(".board");
function createBoard() {
    for (let i = 0; i < 10; i++) {
        let row = document.createElement("div");
        row.classList.add("rows");
        for (let j = 0; j < 10; j++) {
            let col = document.createElement("div");
            col.classList.add("col");
            col.addEventListener("mouseenter", (e) => {
                showCurrentShip(e);
            });
            row.appendChild(col);
        }
        board.appendChild(row);
    }
}
createBoard();
console.log(game);
let col = document.querySelector(".col");
let currentObj = 0;

function showCurrentShip(e) {
    if (currentObj === 0) {
        let current = document.elementFromPoint(e.clientX, e.clientY);
        let total = [];
        for (let i = 0; i < 5; i++) {
            let wow = document.elementFromPoint(e.clientX, e.clientY + (i * 50));
            if (!wow.isEqualNode(col)) {
                wow = null;
            }
            total.push(wow);
            if (wow === null) {
                continue;
            } else {
                wow.classList.add("red");
            }
            
        }
        console.log(total);
        current.classList.add("red");
        current.addEventListener("mouseleave", (e) => {
            current.classList.remove("red");
            for(let i = 0; i < 5; i++) {
                let wows = total[i];
                wows.classList.remove("red");
            }
        })
    }
}
