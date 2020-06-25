import User from '@models/User'
import {Context} from "koa"

class UserController {

    public static create = async (ctx: Context): Promise<void> => {
        ctx.body = await User.create({
            name: ctx.request.body.name,
            number: ctx.request.body.number,
            address: ctx.request.body.address,
            age: ctx.request.body.age
        })
    };

    public static get = async (ctx: Context): Promise<void> => {
        ctx.body = await User.findById(ctx.params.id)
    }

    public static all = async (ctx: Context): Promise<void> => {
        ctx.body = await User.find({}).limit(2).sort('-age')
    }

}

export default UserController
