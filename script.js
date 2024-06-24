let playerLocation = [0, 3];
let cpuLocation = [3, 0];
let playerColor = '';
let cpuColor = '';

const mapSize = [4, 4];
for (i=0;i<mapSize[1];i++) {
    const tr  = document.createElement('tr')
    tr.innerHTML= '';
    document.table.appendChild(tr);
    for (i=0;i<mapSize[0];i++) {
        const th = document.createElement('th');
        th.innerHTML= '';
        document.table.appendChild(th);
        } 
}

function playerChoice(direction) {
    let pLoc = '';
    for (i=0; i<playerLocation.length; i++) {
        pLoc += String(playerLocation[i]);
    }
    const table = document.getElementById('p'+pLoc);
    table.style.backgroundColor = 'white';

    switch(direction){
        case 'up':
            if (playerLocation[1] != 3) {
            playerLocation[1] += 1; 
            cpuClear(playerLocation[0], playerLocation[1]);
            } else {
                table.style.backgroundColor = 'blue';
                alert('Please choose a valid move!');
            }
            break;
        case 'left':
            if (playerLocation[0] != 0) {
            playerLocation[0] -= 1; 
            cpuClear(playerLocation[0], playerLocation[1]);
            } else {
                table.style.backgroundColor = 'blue';
                alert('Please choose a valid move!');
            }
            break;
        case 'stay':
            cpuClear(playerLocation[0], playerLocation[1]);
            break;
        case 'right':
            if (playerLocation[0] != 3) {
            playerLocation[0] += 1; 
            cpuClear(playerLocation[0], playerLocation[1]);
            } else {
                table.style.backgroundColor = 'blue';
                alert('Please choose a valid move!');
            }
            break;
        case 'down': 
            if (playerLocation[1] != 0) {
            playerLocation[1] -= 1; 
            cpuClear(playerLocation[0], playerLocation[1]);
            } else {
                table.style.backgroundColor = 'blue';
                alert('Please choose a valid move!');
            }
            break;
    }
}


function cpuClear(px, py) {
    let cLoc = String(cpuLocation[0])+String(cpuLocation[1]);
    const table = document.getElementById('p'+cLoc);
    table.style.backgroundColor = 'white';

    cpuDirection(px, py);
}


function cpuDirection(px, py) {
    let cpuMove = Math.floor(Math.random()*5);

    switch(cpuMove) {
        case 0: //up
            if (cpuLocation[1] != 3) {
            cpuLocation[1] += 1;
            cpuDisplay(px, py, cpuLocation[0],cpuLocation[1]); 
            } else {
                cpuDirection(px, py);
            }

        break;

        case 1: //left
            if (cpuLocation[0] != 0) {
            cpuLocation[0] -= 1;
            cpuDisplay(px, py, cpuLocation[0],cpuLocation[1]);
            } else {
                cpuDirection(px, py);
            }
        break;

        case 2: //stay
            cpuDisplay(px, py, cpuLocation[0],cpuLocation[1])
        break;

        case 3: //right
            if (cpuLocation[0] != 3) {
                cpuLocation[0] += 1;
                cpuDisplay(px, py, cpuLocation[0],cpuLocation[1]);
                } else {
                    cpuDirection(px, py);
                }
        break;

        case 4: //down
            if (cpuLocation[1] != 0) {
            cpuLocation[1] -= 1;
            cpuDisplay(px, py, cpuLocation[0],cpuLocation[1]); 
            } else {
                cpuDirection(px, py);
            }
        break;
}
}


function cpuDisplay(px, py, cx, cy) {
    const pLoc1 = String(px)+String(py);
   console.log(pLoc1);
    const table1 = document.getElementById('p'+pLoc1);
    table1.style.backgroundColor = 'blue';

    playerLocation = [px, py];

    const cLoc = String(cx)+String(cy);
   
    const table2 = document.getElementById('p'+cLoc);
    table2.style.backgroundColor = 'red';

    cpuLocation = [cx, cy];
    checkForWin(px, py);
}

function checkForWin(x, y) {
    if (playerLocation[0] == cpuLocation[0] && playerLocation[1] == cpuLocation[1]) {
        const cLoc = String(x)+String(y);
   
        const table = document.getElementById('p'+cLoc);
        table.style.backgroundColor = 'purple';
        alert('YOU WIN!!');
    } 
}



function move(dir) {
    for (i; i<dir.length;i++) {

    }
}



