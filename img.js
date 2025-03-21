var img = document.getElementById("img");

window.onload = function() {
    centralizarImagem();
};

function centralizarImagem() {
    img.style.position = "absolute";
    img.style.top = "50%";
    img.style.left = "50%";
    img.style.transform = "translate(-50%, -50%)";
}

function moverBaixo() {
    let txtPixels = document.getElementById("txtPixels");
    let pixels = parseInt(txtPixels.value);
    let topAtual = parseInt(img.style.top);

    img.style.top = (topAtual + (isNaN(pixels) ? 1 : pixels)) + "%";
}

function moverCima() {
    let txtPixels = document.getElementById("txtPixels");
    let pixels = parseInt(txtPixels.value);
    let topAtual = parseInt(img.style.top);

    img.style.top = (topAtual - (isNaN(pixels) ? 1 : pixels)) + "%";
}

function moverDireita() {
    let txtPixels = document.getElementById("txtPixels");
    let pixels = parseInt(txtPixels.value);
    let leftAtual = parseInt(img.style.left);

    img.style.left = (leftAtual + (isNaN(pixels) ? 1 : pixels)) + "%";
}

function moverEsquerda() {
    let txtPixels = document.getElementById("txtPixels");
    let pixels = parseInt(txtPixels.value);
    let leftAtual = parseInt(img.style.left);

    img.style.left = (leftAtual - (isNaN(pixels) ? 1 : pixels)) + "%";
}

function moverCentro() {
    img.style.position = "absolute";
    img.style.top = "50%";
    img.style.left = "50%";
    img.style.transform = "translate(-50%, -50%)";
}

function moverAleatorio() {
    let numeroSorteado = Math.floor(Math.random() * 5);

    if (numeroSorteado === 0) {
        moverCima();
    } else if (numeroSorteado === 1) {
        moverBaixo();
    } else if (numeroSorteado === 2) {
        moverEsquerda();
    } else if (numeroSorteado === 3) {
        moverDireita();
    } else if (numeroSorteado === 4) {
        moverCentro();
    }
}

function sumirImagem() {
    img.style.display = img.style.display === "none" ? "block" : "none";
}
  
img.classList.add("img"); 
img.classList.add("img-fluid");

var rotacao = 0;

function girarHorario() {
    let txtGraus = document.getElementById("txtGraus");
    let graus = parseInt(txtGraus.value);

    if (isNaN(graus)) {
        rotacao++;
    } else {
        if (graus <= 0) {
            alert("Para girar é necessário colocar um número maior do que 0");
            return;
        }
        if (graus > 360) {
            txtGraus.value = 360;
        }

        let rotacaoTemp = rotacao + graus;
        rotacao = rotacaoTemp <= 360 ? rotacaoTemp : rotacaoTemp - 360;
    }

    img.style.transform = `translate(-50%, -50%) rotate(${rotacao}deg)`;
}

function girarAntiHorario() {
    let txtGraus = document.getElementById("txtGraus");
    let graus = parseInt(txtGraus.value);

    if (isNaN(graus)) {
        rotacao--;
    } else {
        if (graus >= 0) {
            alert("Para girar é necessário colocar um número menor do que 0");
            return;
        }
        if (graus < -360) {
            txtGraus.value = -360;
        }

        let rotacaoTemp = rotacao + graus;
        rotacao = rotacaoTemp >= -360 ? rotacaoTemp : rotacaoTemp + 360;
    }

    img.style.transform = `translate(-50%, -50%) rotate(${rotacao}deg)`;
}

function sumirImagem(){
    img.style.display = img.style.display === 'none' ? 'block' : 'none';
}

let isDragging = false;
let offsetX, offsetY;

img.addEventListener("mousedown", function(event) {
    isDragging = true;

    offsetX = event.clientX - img.getBoundingClientRect().left;
    offsetY = event.clientY - img.getBoundingClientRect().top;

    img.style.cursor = "grabbing";
});

document.addEventListener("mousemove", function(event) {
    if (!isDragging) return;

    img.style.position = "absolute";
    img.style.left = event.clientX - offsetX + "px";
    img.style.top = event.clientY - offsetY + "px";
});

document.addEventListener("mouseup", function() {
    isDragging = false;
    img.style.cursor = "grab";
});