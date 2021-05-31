var F = 70;

update();
resize();

function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function draw(e) {

    if (e.buttons !== 1) {
        return;
    }

    ctx.beginPath();

    ctx.lineWidth = 5;
    ctx.lineCap = "round";

    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);

    ctx.stroke();
}

//binds = true
function keydownHandler(e) {
    var key = e.keyCode;
    //clear
    if (key === F) {
        ctx.clearRect(0,0, cnv.width, cnv.height);
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
        ctx.strokeStyle = "#F00";
    } else {
        ctx.strokeStyle = "#000";
    }
    if (green.checked) {
        ctx.strokeStyle = "#0F0";      
    }
    if (blue.checked) {
        ctx.strokeStyle = "#36F";
    }
    //os checks juntos
    if (red.checked && green.checked) {
        ctx.strokeStyle = "#FF0";
    }
    if (green.checked && blue.checked) {
        ctx.strokeStyle = "#0FF";
    }
    if (blue.checked && red.checked) {
        ctx.strokeStyle = "#F0F";
    }
    if (red.checked && green.checked && blue.checked) {
        ctx.strokeStyle = "#FFF";
    } 
}



//master render
function update() {
    
    requestAnimationFrame(update, cnv);
    color();
}