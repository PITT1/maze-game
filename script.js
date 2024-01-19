const wrapper = document.querySelector('.wrapper');

let moveX = 0;
let moveY = 0;
let playerX = 3;
let playerY = 3;

const level1 = () => {
    printWallY(1, 12, 5);
    printWallX(5, 40, 5);
    printWallX(1, 15, 15);
    printWallY(10, 15, 10);
    printWallY(5, 55, 40);
    printWallX(5, 40, 40);
    printWallY(20, 40, 10);
    printWallY(5, 30, 35);
    printWallY(10, 35, 30);
    printWallX(30, 40, 35);
    printWallX(15, 30, 20);
    printWallY(10, 20, 20);
    printWallY(5, 15, 25);
    printWallY(15, 35, 5);
    printWallY(20, 35, 15);
    printWallY(5, 10, 15);
}

const checkWallOut = () => {
    if (playerX < 1) {
        playerX = 1;
    }

    if (playerX > 60) {
        playerX = 60;
    }

    if (playerY < 1) {
        playerY = 1;
    }

    if (playerY > 60) {
        playerY = 60;
    }
}

const playerUpdate = () => {
    var playerElements = wrapper.getElementsByClassName('player');
    if (playerElements[0]) {
        wrapper.removeChild(playerElements[0]);
    }
}

const movePlayerKeydown = (e) => {
    if (e.key == 'ArrowUp') {
        moveY = -1;
        moveX = 0;
    }

    if (e.key == 'ArrowDown') {
        moveY = 1;
        moveX = 0
    }

    if (e.key == 'ArrowLeft') {
        moveY = 0;
        moveX = -1
    }

    if (e.key == 'ArrowRight') {
        moveY = 0;
        moveX = 1;
    }
}

const movePlayerKeyup = (e) => {
    moveY = 0;
    moveX = 0;
}

const printWallY = (begin, end, X) => {
    for (let i = begin; i < end; i++){
        wrapper.innerHTML += `<div class="wall" style="grid-area: ${i}/${X};"></div>`;       
    }
}

const printWallX = (begin, end, Y) => {
    for (let i = begin; i < end; i++){
        wrapper.innerHTML += `<div class="wall" style="grid-area: ${Y}/${i};"></div>`;
    }
}

level1();

const initGame = () => {
    playerUpdate();
    playerX += moveX;
    playerY += moveY;
    checkWallOut();
    wrapper.innerHTML += `<div class="player" style="grid-area: ${playerY}/${playerX};"></div>`;
}



window.addEventListener('keydown', movePlayerKeydown);
window.addEventListener('keyup', movePlayerKeyup);
setInterval(initGame, 60);
