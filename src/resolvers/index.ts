import User from "@models/User";

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        getAll: async (parent, args) => await User.find({})
    },
    Mutation: {
        createUser: async (_, { name }, { dataSources }) => {
            return await User.create({name})
        }
    }
};

export default resolvers
