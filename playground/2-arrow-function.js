// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(2))

const event = {
    name: 'Alphabet',
    guestList: ['A', 'B', 'C'],
    printGuestList() {
        console.log('Letters in the ' + this.name)
        this.guestList.forEach((letter) => {
            console.log(letter + ' is in the ' + event.name)
        })
    }
}

event.printGuestList()
