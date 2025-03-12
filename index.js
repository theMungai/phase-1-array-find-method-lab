// code your solution here
function superbowlWin(record){
    const win = record.find(record => record.result === "W");

    return win ? win.year : undefined
}
superbowlWin(record)