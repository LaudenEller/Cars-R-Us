import { getTechnology } from "./database";

const techs = getTechnology()

// document.addEventListener(
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "resource") {
//             setWheels(parseInt(event.target.value))
//             // const chosenOption = changeEvent.target.value
//             // console.log(chosenOption)  // "1" or "2"
//         }
//     }
// )

export const Technologies = () => {
    let html = ""

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = techs.map( (tech) => {
            return `<option value="${tech.id}">${tech.name}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}