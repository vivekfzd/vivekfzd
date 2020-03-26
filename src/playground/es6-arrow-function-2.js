const user={
    name:'Vivek',
    cities:['Faizabad','Jhansi','Ayodhya'],
    printPlacesLived(){
        return this.cities.map((city) => this.name +' has lived in '+city)
    }
}

console.log(user.printPlacesLived())

//challenge area
const multiplier={
    numbers:[1,2,3,4,5],
    multiplyBy:2,
    multiply(){
        return this.numbers.map((number)=> number * this.multiplyBy)
    }
}
console.log(multiplier.multiply())