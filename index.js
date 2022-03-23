let step = 0.25;
let y = 2;
let x = -2;
let y_dot = 0;

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

function calculatePoints(x, y, step) {
    console.log(x, y, step);
    for(let i = 0; i < (4 + step)/step; i++) {
        ctx.moveTo(250+(x*125), 250*(2-y));
        y_dot = (x) * (y);
        y += y_dot * step;
        x += step;
        ctx.lineTo(250+(125*x), 250*(2-y));
        ctx.stroke();
    }
}


document.querySelector("button").addEventListener("click", function() {
    console.log("hej")
    step = document.querySelector("#quality").value;
    document.querySelector("#qualityLabel").innerText = `Step Size: ${step}`
    console.log(step);
    document.querySelector("#myCanvas").remove();
    document.querySelector("body").innerHTML += `<canvas id="myCanvas" width="500" height="500" style="border:1px solid #000000;">`
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    x = -2;
    y = 2;
    y_dot = 0;
    calculatePoints(x, y, parseFloat(step));
})

calculatePoints(x, y, step);