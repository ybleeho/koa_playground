
import  User, {UserModel} from "@models/user";

async function createUser(userInfo: Object): Promise<UserModel | null>{
    return await User.create(userInfo)
}

async function getUser(id:string): Promise<UserModel | null>{
    const user = await User.findById(id);
    return user;
}

async function getUsers(): Promise<UserModel[] | null>{
    const users = await User.find();
    return users;
}

export default {
    createUser,
    getUser,
    getUsers
}
