import { carFactory } from "./factory.js"

const mainContainer = document.querySelector("#container")

// create function that renders the inner html of index.html to be populated by the factory.js html
const renderAllHTML = () => {
    mainContainer.innerHTML = carFactory()
}

// invoke render function
renderAllHTML()

// listen for state change announcements
document.addEventListener("stateChanged", event => {
    // invoke render function
    renderAllHTML()
})