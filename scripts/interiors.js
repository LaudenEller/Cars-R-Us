import { getInterior, setInterior } from "./database.js"

const interiors = getInterior()

// add event listener to set user input

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interiors") {
            // sets user input to order builder interiorsId
            setInterior(parseInt(event.target.value))
            // const chosenOption = changeEvent.target.value
            // console.log(chosenOption)  // "1" or "2"
        }
    }
)

// export interiors html using dropdown menu instead of radio buttons
export const Interiors = () => {
    // create empty string
    let html = ""
   
    // adds dropdown box to html
    html += `<select id="interiors">`
    // sets default value of box
    html += `<option value="0">Choose your interior</option>`
    
    // iterate trhough the interiors array
    for (const interior of interiors) {
        // add dropdown option for each integar in the array
        html += `<option value="${interior.id}">${interior.name}</option>`
}

html += "</select>"
return html
}