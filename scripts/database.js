// add database representing ERD
const database = {
    orderBuilder: {

    },
    wheels: [
        { id: 1, name: "17-inch Pair Radial", price: 500 },
        { id: 2, name: "17-inch Pair Radial Black", price: 500 },
        { id: 3, name: "18-inch Pair Spoke Silver", price: 500 },
        { id: 4, name: "18-inch Pair Spoke Black", price: 500 }
    ],
    technology: [
        { id: 1, name: "Basic Package (basic sound system)", price: 500 },
        { id: 2, name: "Navigation Package (includes integrated navigation controls", price: 700 },
        { id: 3, name: "Visibility Package (includes side and rear cameras)", price: 1000 },
        { id: 4, name: "Ultra Package (includes navigation and visibility packages)", price: 1500 }
    ],
    interior: [
        { id: 1, name: "Beige Fabric", price: 100 },
        { id: 2, name: "Charcoal Fabric", price: 100 },
        { id: 3, name: "White Leather", price: 200 },
        { id: 2, name: "Black Leather", price: 200 }
    ],
    paint: [
        { id: 1, name: "Silver", price: 100 },
        { id: 2, name: "Midnight Blue", price: 200 },
        { id: 3, name: "Firebrick Red", price: 300 },
        { id: 4, name: "Spring Green", price: 400 }
    ],
    customerOrders: [
        {
            id: n,
            wheelsId: n,
            technologyId: n,
            interiorId: n,
            paintId: n
        },
    ]
    }


// export each section of the database
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
}
export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}
export const getPaint = () => {
    return database.paint.map(wheel => ({...paint}))
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}