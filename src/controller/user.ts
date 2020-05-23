import User from '@models/User'

class UserController {

    public static create = async (ctx) => {
        ctx.body = await User.create({
            name: ctx.request.body.name
        })
    };

    public static get = async (ctx) => {
        ctx.body = await User.findById(ctx.params.id)
    }

}

export default UserController
