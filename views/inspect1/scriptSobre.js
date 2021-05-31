//binds
var UP = 87, DOWN = 83, LEFT = 65, RIGHT = 68;
var SHIFT = 16, F = 70;
//moves
var moveUp = false, moveDown = false, moveLeft = false, moveRight = false;
var speedUp = false, speedDown = false, speedLeft = false, speedRight = false;

alert("HOW TO PLAY \n\nW = UP \nA = LEFT \nS = DOWN \nD = RIGHT \n\nSHIFT + MOVECOMMANDS = SPEED UP \nF = CLEAN DRAW");

update();

//binds = true
function keydownHandler(e) {
    //moves press
    var key = e.keyCode;
    if (key === LEFT && key !== RIGHT) {
        moveLeft = true;
    }
    if (key === RIGHT && key !== LEFT) {
        moveRight = true;
    }
    if (key === UP && key !== DOWN) {
        moveUp = true;
    }
    if (key === DOWN && key !== UP) {
        moveDown = true;
    }
    //clear
    if (key === F) {
        ctx.clearRect(0,0, cnv.width, cnv.height);
    }
    //speed
    if (key === SHIFT) {
        speedUp = true, speedDown = true, speedLeft = true, speedRight = true;
    }
}

//binds = false
function keyupHandler(e) {
    //moves release
    var key = e.keyCode;
    if (key === LEFT && key !== RIGHT) {
        moveLeft = false;
    }
    if (key === RIGHT && key !== LEFT) {
        moveRight = false;
    }
    if (key === UP && key !== DOWN) {
        moveUp = false;
    }
    if (key === DOWN && key !== UP) {
        moveDown = false;
    }
    //speed
    if (key === SHIFT) {
        speedUp = false, speedDown = false, speedLeft = false, speedRight = false;
    }
}

//movimentação
function move() {
    if (moveLeft) {
        p1.x--;
    }
    if (moveRight) {
        p1.x++;
    }
    if (moveUp) {
        p1.y--;
    }
    if (moveDown) {
        p1.y++;
    }
}

//aumento de vel
function speed() {
    if (speedLeft && moveLeft) {
        p1.x--;
    }
    if (speedRight && moveRight) {
        p1.x++;
    }
    if (speedUp && moveUp) {
        p1.y--;
    }
    if (speedDown && moveDown) {
        p1.y++;
    }
}

//função limpar
function clearFunc(clean) {
    
    if (clean) {
        ctx.clearRect(0,0, cnv.width, cnv.height);
    }
}

//colors
function color() {
    //default rgb
    if (red.checked) {
        ctx.fillStyle = "#F00";
    } else {
        ctx.fillStyle = "#000";
    }
    if (green.checked) {
        ctx.fillStyle = "#0F0";      
    }
    if (blue.checked) {
        ctx.fillStyle = "#36F";
    }
    //os checks juntos
    if (red.checked && green.checked) {
        ctx.fillStyle = "#FF0";
    }
    if (green.checked && blue.checked) {
        ctx.fillStyle = "#0FF";
    }
    if (blue.checked && red.checked) {
        ctx.fillStyle = "#F0F";
    }
    if (red.checked && green.checked && blue.checked) {
        ctx.fillStyle = "#FFF";
    } 
}

//render obj /w colors
function render() {
    ctx.fillRect(p1.x,p1.y,60,60);
    color();
}

//master render
function update() {
    requestAnimationFrame(update, cnv);
    move();
    speed();
    render();
}