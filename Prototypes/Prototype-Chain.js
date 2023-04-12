function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
    this.firstName = firstName
    this.lastName = lastName
    this.favoriteColor = favoriteColor
    this.favoriteNumber = favoriteNumber
    this.favoriteFoods = favoriteFoods
}
Person.prototype.fullName = function(){
    return `Full Name: ${this.firstName} ${this.lastName}`;
}

Person.prototype.toString = function(){
    return `Full Name: ${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`
}

Person.prototype.family = [];

Person.prototype.addToFamily = function (newFamily) {
    if(newFamily instanceof Person && !this.family.includes(newFamily))
    this.family.push(newFamily)
    return  this.family.length
}
    


    let jerry = new Person("Jerry", "Seinfeld", "Green", "2", ["Airplane food", "Peanuts"])
    console.log(jerry.fullName())
    console.log(jerry.toString())

    let chuck = new Person("Chuck", "Norris", "Red", "0", ["Wood Chips", "Beer"])

    let walter = new Person("Walter", "White", "Blue", "9,000,000", ["Blue Candy", "Eggs", "Bacon"])

    jerry.addToFamily(jerry)
    chuck.addToFamily(chuck)
    walter.addToFamily(walter)
    console.log(Person.prototype.family)
