
// ======================REST AND SPREAD OPERATORS==============

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const [firstAnimal, secondAnimal, ...otherAnimals] = animals;

// console.log(otherAnimals);

// REST AND SPREAD WITH OBJECTS AND ARRAYS
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
        },
        {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
    };

const Pcopy = {...person }; //Using spread we can quickly make complete copies of objects or arrays.// We should remember that the copy is shallow.
// console.log(Pcopy); 

Pcopy === person; //this will be false, cuz the copy is shallow.
Pcopy.addresses === person.addresses; //this will be true

// Or we can grab the rest of the information that we want.
const { firstName, lastName, ...restOfInfo } = person;
// console.log(restOfInfo);
// console.log(firstName, restOfInfo);
// console.log(restOfInfo, lastName);
