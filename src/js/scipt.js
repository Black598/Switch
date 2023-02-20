
const switchButton = document.getElementById("switch")
const body = document.getElementById("color-body")
const selector = document.getElementById("ball-selector")

function toggle() {
    body.classList.toggle("hidden")
    selector.classList.toggle("move")
}

switchButton.addEventListener("click", ()=>{
    toggle()
    console.log("Toggling theme")
});