import User from '@models/User'
import {Context} from "koa"
import Any = jasmine.Any;

class UserController {

    public static create = async (ctx: Context) => {
        ctx.body = await User.create({
            name: ctx.request.body.name
        })
    };

    public static get = async (ctx: Context) => {
        ctx.body = await User.findById(ctx.params.id)
    }

}

export default UserController
