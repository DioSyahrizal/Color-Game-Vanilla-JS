var numberSquares = 6
var colors = []
var pickedColor
var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode")

init()

function init(){
    //mode button
    setupModeButton()
    setupSquares()
    reset()
}

function setupModeButton() {
        //mode button
        for (i = 0; i < modeButtons.length; i++) {
            modeButtons[i].addEventListener("click", function () {
                modeButtons[0].classList.remove("selected")
                modeButtons[1].classList.remove("selected")
                this.classList.add("selected")
                this.textContent === "Easy" ? numberSquares = 3: numberSquares = 6;
                // if(this.textContent === "Easy"){
                //     numberSquares = 3;
                // }else{
                //     numberSquares = 6;
                // }
                reset()
            })
        }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add eventlistener to the square
        squares[i].addEventListener("click", function () {
            //grab color
            var clickedColor = this.style.backgroundColor;
            //compare color to placeholder
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                changeColors(clickedColor)
                h1.style.backgroundColor = clickedColor
                resetButton.textContent = "Play Again"
            } else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again"
            }
        })
    }
}

function reset() {
    //generate new color
    colors = generateRandomColor(numberSquares)
    //pick random color
    pickedColor = pickColor()
    //change the color of square
    colorDisplay.textContent = pickedColor
    resetButton.textContent = "New Colors"
    for (var i = 0; i < squares.length; i++) {
        //add color in square
        if (colors[i]) {
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i]
        }else{
            squares[i].style.display = "none"
        }
    }
    h1.style.backgroundColor = "steelblue"
    messageDisplay.textContent = ""
}

resetButton.addEventListener("click", function () {
    reset()
})

function changeColors(color) {
    //loop
    for (var i = 0; i < squares.length; i++) {
        //change color to match
        squares[i].style.backgroundColor = color
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColor(num) {
    //array
    var arr = []
    //repeat num
    for (var i = 0; i < num; i++) {
        //get random color
        arr.push(randomColor())
    }
    //return
    return arr
}

function randomColor() {
    //pick red
    var r = Math.floor(Math.random() * 256)
    //pick green
    var g = Math.floor(Math.random() * 256)
    //pick blue
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}