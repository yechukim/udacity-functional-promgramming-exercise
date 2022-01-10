// Merge another character into this state. Keep at least one value and change at least one value

let state = {
    name: 'Wash',
    ship: {
        name: 'Serenity',
        class: 'Firefly'
    },
    role: 'Pilot',
    favoriteThing: {
        item: "Toy",
        details: {
            type: 'Toy Tyrannosaurus Rex'
        }
    }
}

const incomingState = {
    name: 'Sara',
    role: 'Captain',
    favoriteThing: {
        item: "Not complicated",
        details: {
            type: "everything I see"
        }
    },
    history: ["Browncoat sergeant"]

}

state = Object.assign(state, incomingState);
console.log(state)
// Object.assign(target, source)

// Resulting object
// state = { 
//     name: "Mal", 
//     ship: { 
//         name: "Serenity", 
//         class: "Firefly" 
//     }, 
//     role: "Captain", 
//     favoriteThing: { 
//         item: "Not complicated" 
//     }, 
//     history: ["Browncoat sergeant"] 
// } 

// Your Code here
