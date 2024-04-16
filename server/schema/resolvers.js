import faker from "faker";
import {UserList, MovieList} from "../FakeData.js"
export const resolvers = {
    Query: {
        hello: () => {
            return "Hello, world!";
        },
        user(_, { id }) {
            return UserList.find((user) => user.id === id);
        },
        users(parent, args,  context, info) {
            console.log(context);
            return UserList;
        },
        movies(){
            return MovieList;
        },
        movie(_, {name}){
            return MovieList.find((movie) => movie.name === name);
        }
    },
    User: {
        favouriteMovies(){
            return MovieList.filter((movie) => movie.yearOfPublication === 2000);
        }
    },
    Mutation:{
        createUser:(parent, args)=>{
            const user = args.input;
            user.id = faker.datatype.uuid();
            UserList.push(user);
            console.log(user);
            return  user;
        },
        updateUsername:(parent,args) =>{
            const {id,newUsername} = args.input;
            let userUpdated;
            UserList.forEach((user) =>{
                if(user.id == id){
                    user.username = newUsername;
                    userUpdated = user;
                    console.log(userUpdated);
                }
            });
            return userUpdated;
        },
        deleteUser : (parent, args) => {
            const index = UserList.findIndex((user) => user.id == args.id);
            const objj = UserList[index];
            console.log(index);
            if (index > -1) {
              UserList.splice(index, 1);
            }
            return objj;
          },
    }
};