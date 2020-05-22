import User from '@models/User'

class UserController {

    create = async (ctx) => {
        ctx.body = await User.create({
            name: ctx.request.body.name,
            createdAt: new Date()
        })
    }

    get = async (ctx) => {
        ctx.body = await User.findById(ctx.params.id)
    }

}

export default UserController
