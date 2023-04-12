function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
    this.firstName = firstName
    this.lastName = lastName
    this.favoriteColor = favoriteColor
    this.favoriteNumber = favoriteNumber
    this.favoriteFoods = favoriteFoods
}
Person.prototype.fullName = function(){
    return `Full Name: ${this.firstName} ${this.lastName}`
}

    let jerry = new Person("Jerry", "Seinfield", "Blue", "2", ["Airplane food", "Peanuts"])
    console.log(jerry.fullName())
    console.log(jerry)
