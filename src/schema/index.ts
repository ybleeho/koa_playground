import { gql } from "apollo-server-koa";
import userSchema from "./user";
const schema = gql`
    type Query {
        _empty: String
    }
    type Mutation {
        _empty: String
    }
`;

export default [schema, userSchema]
