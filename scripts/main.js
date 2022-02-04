import { carFactory } from "./factory.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carFactory()
}

renderAllHTML()

// document.addEventListener("stateChanged", event => {
//     renderAllHTML()
// })