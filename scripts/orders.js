import { getInterior, getPaint, getTechnology, getWheels, getOrders } from "./database.js"

// build a order list item, pass order as argument.
const buildOrderListItem = (order) => {

    const interiors = getInterior()
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    let totalCost = foundInterior.price

    const Paints = getPaint()
    const foundPaint = Paints.find(
        (paint) => {
            return (paint.id === order.paintId)
        }
    )

    totalCost += foundPaint.price

    const technology = getTechnology()
    const foundTech = technology.find(
        (tech) => {
            return (tech.id === order.techId)
        }
    )

    totalCost += foundTech.price
    
    const wheels = getWheels()
    const foundWheels = wheels.find(
        (wheel) => {
            return (wheel.id === order.wheelId)
        }
    )

    totalCost += foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
}


export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(
        (order) => {
            return buildOrderListItem(order)
        })

    html += listItems.join("")
    html += "</ul>"

    return html
}