import { getWheels } from "./database";

const wheels = getWheels()

export const Wheels = () => {
    let html = "<ul>"
   
    html += `<select id="wheels"><option value="0">Choose Some Wheels</option>`
    
    for (const wheel of wheels) {
        html += `<li>
        <option value="1">${wheel.name}</option>
        </li>`
}

html += "</ul>"
return html
}

// import { getMetals, setMetal } from "./database.js"

// const metals = getMetals()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "metal") {
//             setMetal(parseInt(event.target.value))
//         }
//     }
// )

// export const Metals = () => {
//     let html = "<ul>"
//     // Remember that the function you pass to find() must return true/false
    
    
//     // This is how you have been converting objects to <li> elements
//     for (const metal of metals) {
//         html += `<li>
//         <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
//         </li>`
//     }
    
    
//     html += "</ul>"
//     return html
// }