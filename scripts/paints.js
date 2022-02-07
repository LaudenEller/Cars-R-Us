import { getPaint, setPaint } from "./database.js"

const paints = getPaint()

// add event listener to set user input

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paints") {
            setPaint(parseInt(event.target.value))
            // const chosenOption = event.target.value
            // console.log(chosenOption)  // "1" or "2"
        }
    }
)

export const Paints = () => {
    return `<select id="paints">
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