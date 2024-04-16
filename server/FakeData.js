// import * as faker from 'faker';
import faker from "faker";
// Generate dummy data for users
const generateUsers = (count) => {
    const users = [];
    
    for (let i = 0; i < count; i++) {
        const user = {
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
            username: faker.internet.email(),
            age: faker.datatype.number({ min: 18, max: 60 }),
            nationality: faker.address.country(),
            friends:[
                {

                id: faker.datatype.uuid(),
                name: faker.name.findName(), 
            }
            ]
            };
        users.push(user);
    }
    
    return users;
};
const MovieList = [
    {
        id:1,
        name:"kata",
        yearOfPublication:2000
    }
]
// Generate 10 dummy users
const UserList = generateUsers(10);
export  {UserList, MovieList};