import User from '@models/User'
import {Context} from "koa"

class UserController {

    public static create = async (ctx: Context): Promise<void> => {
        ctx.body = await User.create({
            name: ctx.request.body.name
        })
    };

    public static get = async (ctx: Context): Promise<void> => {
        ctx.body = await User.findById(ctx.params.id)
    }

}

export default UserController
