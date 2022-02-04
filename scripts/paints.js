import { getPaint } from "./database";

const paints = getPaint()

// add event listener to set user input

// document.addEventListener(
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "paints") {
//             setPaint(parseInt(event.target.value))
//             // const chosenOption = changeEvent.target.value
//             // console.log(chosenOption)  // "1" or "2"
//         }
//     }
// )

export const Paints = () => {
    return `<h2>Paints</h2>
        <select id="paints">
            <option value="0">Select a paint option</option>
            ${
                paints.map(
                    (paint) => {
                        return `<option value="${paint.id}">${paint.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}