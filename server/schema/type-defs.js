import { gql } from 'apollo-server';

export const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: String!
        friends : [Friends!]
        favouriteMovies: [Movie!]
    }
    
    type Friends {
        id : ID!
        name : String!
    }
    type Query {
        users: [User!]!
        user(id: ID!): User
        movies:[Movie!]
        movie(name:String!): Movie
        hello:String
    }
    type Movie{
        id: ID
        name: String!
        yearOfPublication: Int!
        isInTheater: Boolean!
    }
    input createUserInput {
        name: String!
        username: String!
        age: Int = 17
        nationality: String
    }
    input updateUsernameInput {
        id:ID!
        newUsername: String!
    }
    type Mutation {
        createUser(input: createUserInput!): User
        updateUsername(input: updateUsernameInput): User
        deleteUser(id: ID!): User
    }

    
    enum Nationality{
        INDIA
        CANADA
        USA


    }
`;

