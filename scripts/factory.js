// import functions from all other modules
import { Technologies } from "./technologies.js"
import { Interiors } from "./interiors.js"
import { Paints } from "./paints.js"
import { Wheels } from "./wheels.js"
import { addCustomOrder } from "./database.js"

// add event listener to place order button

// document.addEventListener(
//     "click",
//     (event) => {
//         if (event.target.id === "orderButton") {
//             addCustomOrder()

//         }
//     }
// )

// interpoolate imported functions in the appropriate places of HTML structure

export const carFactory = () => {
    return `
    <h1>Lauden's Car Factory</h1>

    <article class="choices">
        <section class="choices__paints">
            <h2>Paints</h2>
            ${Paints()}
            </section>
            
        <section class="choices__interiors">
            <h2>Interiors</h2>
            ${Interiors()}
            </section>
            
        <section class="choices__wheels">
            <h2>Wheels</h2>
            ${Wheels()}
            </section>
            
        <section class="choices__technologies">
            <h2>Technology</h2>
            ${Technologies()}
            </section>
            
    </article>
    `
}



// export const KneelDiamonds = () => {
//     return `
//         <h1>Kneel Diamonds</h1>

//         <article class="choices">
//             <section class="choices__metals options">
//                 <h2>Metals</h2>
//                 ${Metals()}
//             </section>
//             <section class="choices__sizes options">
//                 <h2>Sizes</h2>
//                 ${DiamondSizes()}
//             </section>
//             <section class="choices__styles options">
//                 <h2>Styles</h2>
//                 ${JewelryStyles()}
//             </section>
//         </article>

//         <article>
//             <button id="orderButton">Create Custom Order</button>
//         </article>

//         <article class="customOrders">
//             <h2>Custom Jewelry Orders</h2>
//             ${Orders()}
//         </article>
//     `
// }