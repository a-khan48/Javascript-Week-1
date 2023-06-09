const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

let jose = users.find(users => users.firstName == 'Jose')

let premiumMembers = users.filter(users => users.isPremiumMember === true)

let usersLastName = users.map(users => users.lastName);

let usersRecurringLogin = users.filter(users => users.logins > 10).map(users => users.firstName +" "+ users.lastName);

let userTotalLogin = users.map(users => users.logins).reduce(((login,total) => login+total),0)


console.log(jose);
console.log(premiumMembers);
console.log(usersLastName);
console.log(usersRecurringLogin);
console.log(userTotalLogin)
