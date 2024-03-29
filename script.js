const wrapper = document.querySelector('.wrapper');

let moveX = 0;
let moveY = 0;
let playerX = 3;
let playerY = 3;
let coinsScore = 0;

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
    printWallX(20, 30, 25);
    printWallX(15, 25, 30);
    printWallX(20, 30, 35);
    printWallX(1, 20, 45);
    printWallY(40, 50, 25);
    printWallX(10, 26, 50);
    printWallY(50, 61, 5);
    printWallX(5, 15, 55);
    printWallY(50, 56, 20);
    printWallX(20, 30, 55);
    printWallY(45, 56, 30);
    printWallX(30, 35, 45);
    printWallY(50, 61, 35);
    printWallX(40, 55, 55);
    printWallY(35, 50, 55);
    printWallX(45, 56, 50);
    printWallY(40, 50, 45);
    printWallX(40, 50, 35);
    printWallY(35, 45, 50);
    printWallX(55, 61, 35);
    printWallX(45, 55, 30);
    printWallY(20, 30, 50);
    printWallY(15, 25, 45);
    printWallX(40, 56, 15);
    printWallY(15, 25, 55);
    printWallX(45, 61, 10);
    printWallX(40, 55, 5);

    wrapper.innerHTML += '<div class="end" style="grid-area: 19/42;"></div>'
    wrapper.innerHTML += '<div class="end" style="grid-area: 19/43;"></div>'
    wrapper.innerHTML += '<div class="end" style="grid-area: 19/44;"></div>'
    wrapper.innerHTML += '<div class="end" style="grid-area: 19/41;"></div>'
    wrapper.innerHTML += '<div class="end" style="grid-area: 18/41;"></div>'
    wrapper.innerHTML += '<div class="end" style="grid-area: 18/42;"></div>'
    wrapper.innerHTML += '<div class="end" style="grid-area: 18/43;"></div>'
    wrapper.innerHTML += '<div class="end" style="grid-area: 18/44;"></div>'
    wrapper.innerHTML += '<div class="end" style="grid-area: 17/41;"></div>'
    wrapper.innerHTML += '<div class="end" style="grid-area: 17/42;"></div>'
    wrapper.innerHTML += '<div class="end" style="grid-area: 17/43;"></div>'
    wrapper.innerHTML += '<div class="end" style="grid-area: 17/44;"></div>'
    wrapper.innerHTML += '<div class="end" style="grid-area: 16/41;"></div>'
    wrapper.innerHTML += '<div class="end" style="grid-area: 16/42;"></div>'
    wrapper.innerHTML += '<div class="end" style="grid-area: 16/43;"></div>'
    wrapper.innerHTML += '<div class="end" style="grid-area: 16/44;"></div>'
}

const level1Coins = (Y, X) => {
    wrapper.innerHTML += `<div class="coins" style="grid-area: ${Y}/${X};"></div>`
}

const checkCoinDroped = () => {
    let coins = document.querySelectorAll('.coins');
    coins.forEach((coin) => {
        let playerDom = document.querySelector('.player');
        let coinRect = coin.getBoundingClientRect();
        let playerRect = playerDom.getBoundingClientRect();
        if (coinRect.x == playerRect.x && coinRect.y == playerRect.y) {
            coin.className = 'none';
            console.log("coin obtained");
            coinsScore ++;
            console.log(coinsScore);
        }
    });
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

const checkWallcrash = () => {
    let walls = document.querySelectorAll('.wall');
    walls.forEach(wall => {
        let playerDom = document.querySelector('.player');
        let playerRect = playerDom.getBoundingClientRect();
        let wallRect = wall.getBoundingClientRect();
        if(wallRect.x == playerRect.x && wallRect.y == playerRect.y) {
            if (moveY == -1 && moveX == 0) {
                playerY += 1;
                moveY = 0;
            }
            if (moveY == 1 && moveX == 0) {
                playerY -= 1;
                moveY = 0;
            }
            if (moveY == 0 && moveX == -1) {
                playerX += 1;
                moveX = 0;
            }
            if (moveY == 0 && moveX == 1) {
                playerX -= 1;
                moveX = 0;
            }
        }
    })
}

const playerUpdate = () => {
    let playerElements = wrapper.getElementsByClassName('player');
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

    if (e.key == 'x') {
        moveY = 0;
        moveX = 0;
    }
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

const checkPlayerWin = () => {
    let endArea = document.querySelectorAll('.end');
    let playerDom = document.querySelector('.player');
    endArea.forEach((area) => {
        let endRect = area.getBoundingClientRect();
        let playerRect = playerDom.getBoundingClientRect();
        if(endRect.x == playerRect.x && endRect.y == playerRect.y) {
            if (coinsScore == 8) {
                alert("you win!!");
            }
        }
    });
}

level1();
level1Coins(2, 8);
level1Coins(8, 38);
level1Coins(22, 28);
level1Coins(37, 38);
level1Coins(18, 2);
level1Coins(57, 2);
level1Coins(53, 23);
level1Coins(38, 58);
const initGame = () => {
    playerUpdate();
    playerX += moveX;
    playerY += moveY;
    checkWallOut();
    wrapper.innerHTML += `<div class="player" style="grid-area: ${playerY}/${playerX};"></div>`;
    checkWallcrash();
    checkCoinDroped();
    checkPlayerWin();
}



window.addEventListener('keydown', movePlayerKeydown);
setInterval(initGame, 50);
