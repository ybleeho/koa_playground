import {gql} from "apollo-server-koa";

const userSchema = gql`
    extend type Query {
        getUser(id: ID): User
        getUsers: [User]
    }

    extend type Mutation {
        createUser(userInfo: CreateUserInput): User
    }
    
    input CreateUserInput {
        name: String
        age: Int
        address: String
    }
    
    type User {
        id: ID
        name: String
        age: Int
        address: String
        number: String
    }
`;

export default userSchema
