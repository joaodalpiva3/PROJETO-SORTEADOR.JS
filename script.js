document.getElementById("getValue").addEventListener("click", drawNumber);

function drawNumber() {
    const min = parseInt(document.getElementById("min").value)
    const max = parseInt(document.getElementById("max").value)

    if (isNaN(min) || isNaN(max) || min >= max) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos!";
        return;
    
    
}

const drawResult = Math.floor(Math.random() * (max - min + 1)) + min;
document.getElementById("resultado").innerText = `Número sorteado: ${drawResult}`;

}
