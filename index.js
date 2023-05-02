// code your solution here
function superbowlWin(record) {
    const gameYear = record.find(game => game.result === "W");
    return gameYear ? gameYear.year : gameYear;
}
