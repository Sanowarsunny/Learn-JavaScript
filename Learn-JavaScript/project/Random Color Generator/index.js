const containerEl = document.querySelector(".container")

for (let index = 0; index < 24; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorCodeEl = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){

    colorCodeEl.forEach(
        (colorContainerEl) =>{
            const newColorCode = randomColor();
            colorContainerEl.style.backgroundColor = "#" + newColorCode;
            colorContainerEl.innerText = "#" + newColorCode;
        });
}

function randomColor(){

    const chars = "0123456789abcdef";
    const colorLen = 6;
    let colorCode = "";

    for (let index = 0; index < colorLen; index++) {
        const randomNum = Math.floor(Math.random()
        * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}