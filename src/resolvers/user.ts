import userLoader from "@loader/user"

const userResolvers = {
    Query: {
        getUser: async (parent, args, context, info) => await userLoader.getUser(args.id),
        getUsers: async (parent, args, context, info) => await userLoader.getUsers()
    },
    Mutation: {
        createUser: async (_, args, { dataSources }) => {
            return await userLoader.createUser(args.userInfo)
        }
    }
};

export default userResolvers
