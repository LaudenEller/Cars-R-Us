// import functions from other modules
import { Technologies } from "./technologies.js"
import { Interiors } from "./interiors.js"
import { Paints } from "./paints.js"
import { Wheels } from "./wheels.js"
import { addCustomerOrder } from "./database.js"
import { Orders } from "./orders.js"

// add event listener to place order button
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomerOrder()

        }
    }
)

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

    <article>
    <button id="orderButton">Order Your Car</button>
</article>

<article class="carOrders">
    ${Orders()}
</article>
`
}