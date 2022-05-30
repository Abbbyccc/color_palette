const colour_elements = document.querySelectorAll('.colour');
const colour_inputs = document.querySelectorAll('.colour_input');
const copy_colours = document.querySelectorAll(".copy_colour");
const label_ele = document.querySelectorAll(".colour_code");

function createRandomHex() {
    const chars = '0123456789ABCDEF';
    let hex = '#'
    for (let i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * 16)]
    }
    return hex
}

const giveColour = function giveColour() {
    for (let i = 0; i < colour_elements.length; i++) {
        let hexNum = createRandomHex()
        colour_elements[i].style.backgroundColor = hexNum;
        label_ele[i].innerHTML = hexNum;
    }
}

function changeColor() {
    for (let i = 0; i < colour_inputs.length; i++) {
        colour_inputs[i].addEventListener("input", () => {
            const color = colour_inputs[i].value
            colour_elements[i].style.backgroundColor = color
            label_ele[i].textContent = color
        })
    }
}

function copycolor() {
    for (let i = 0; i < copy_colours.length; i++) {
        copy_colours[i].onclick = function () {
            colour_inputs[i].select();
            document.execCommand("copy");
            copy_colours[i].innerHTML = "copied"
            setTimeout(() => {
                copy_colours[i].innerHTML = "copy";
            }, 1500);
        }
    }
}


changeColor()
giveColour()
copycolor()



document.addEventListener("keypress", function (event) {
    if (event.key === " ") {
        giveColour()
    }
})
document.querySelector(".refresh_button").addEventListener("click", giveColour);


function createJson() {
    let jsonData = []
    for (let i = 0; i < colour_inputs.length; i++) {
        jsonData += colour_inputs[i].value

    }
    console.log(jsonData)
}
