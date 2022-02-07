import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

// add event listener to set user input

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            setWheels(parseInt(event.target.value))
            // const chosenOption = event.target.value
            // console.log(chosenOption)  // "1" or "2"
        }
    }
)

// export wheels html using dropdown menu instead of radio buttons
export const Wheels = () => {
    let html = ""
   
    html += `<select id="wheels">`
    html += `<option value="0">Choose Some Wheels</option>`
    
    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.name}</option>`
}

html += "</select>"
return html
}