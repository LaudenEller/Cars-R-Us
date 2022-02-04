import { getInterior } from "./database";

const interiors = getInterior()

// add event listener to set user input

// document.addEventListener(
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "interiors") {
//             setInterior(parseInt(event.target.value))
//             // const chosenOption = changeEvent.target.value
//             // console.log(chosenOption)  // "1" or "2"
//         }
//     }
// )

// export interiors html using dropdown menu instead of radio buttons
export const interiors = () => {
    let html = ""
   
    html += `<select id="interiors">`
    html += `<option value="0">Choose your interior</option>`
    
    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.name}</option>`
}

html += "</select>"
return html
}