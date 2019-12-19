// const user = {
//     name: 'koFTT',
//     cities: ['São Paulo', 'Curitiba', 'Itu'],
//     printPlaces() {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has been in ' + city);
//         });
//     }
// }
// user.printPlaces();


const user = {
    name: 'koFTT',
    cities: ['São Paulo', 'Curitiba', 'Itu'],
    printPlaces() {
        return this.cities.map((city) => this.name + ' has been in ' + city);
    }
}
console.log(user.printPlaces());

// Challengeeeeeeeeeeee

const multiplier = {
    numbers: [2,4,6],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());