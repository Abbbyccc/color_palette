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


function giveTetrad() {
    let colors = tinycolor(createRandomHex()).tetrad();
    const colorsHex = colors.map(function (t) { return t.toHexString(); })
    for (let i = 0; i < colour_elements.length; i++) {
        colour_elements[i].style.backgroundColor = colorsHex[i]
        label_ele[i].textContent = colorsHex[i]
    }
}



function giveAnalogous() {
    let colors = tinycolor(createRandomHex()).analogous();
    const colorsHex = colors.map(function (t) { return t.toHexString(); })
    for (let i = 0; i < colour_elements.length; i++) {
        colour_elements[i].style.backgroundColor = colorsHex[i]
        label_ele[i].textContent = colorsHex[i]
    }
}

function copycolor() {

    for (let i = 0; i < copy_colours.length; i++) {
        copy_colours[i].onclick = function () {
            const text = label_ele[i].innerHTML;
            const el = document.createElement('textarea')
            el.value = text;
            document.body.appendChild(el)
            el.select()
            document.execCommand('copy')
            document.body.removeChild(el)

            copy_colours[i].innerHTML = "Copied"
            setTimeout(() => {
                copy_colours[i].innerHTML = "Copy";
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

