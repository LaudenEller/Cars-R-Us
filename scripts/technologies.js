import { getTechnology, setTechnology } from "./database.js"

const techs = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTechnology(parseInt(event.target.value))
            // const chosenOption = event.target.value
            // console.log(chosenOption)  // "1" or "2"
        }
    }
)

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