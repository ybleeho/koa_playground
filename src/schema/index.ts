import {gql} from "apollo-server-koa";

const typeDefs = gql`
    type Query {
        hello: String
        getAll: [User]
    }
    
    type Mutation {
        createUser(name: String): User
    }
    
    type User {
        name: String
        age: Int
        address: String
        number: String
    }
`;

export default typeDefs
