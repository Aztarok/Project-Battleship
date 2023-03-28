const battleship = require("./battleship");

it("Ship checking", () => {
    expect(battleship.game.carrier.hits).toBe(5);
})

it("Gameboard checking", () => {
    expect(battleship.game.hitCheck(5, 2)).toEqual(yes);
})