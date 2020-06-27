import {Document, model, Model, Schema} from 'mongoose';


export interface UserModel extends Document{
    name: string,
    age: number,
    address: string,
    number: string,
    createdAt: Date
}

const userSchema = new Schema({
    name: String,
    age: {
        type: Number,
        default: 0
    },
    address: {
        type: String,
    },
    number: String,
    createdAt: {type: Date, default: Date.now}
}, {
    versionKey: false
});

export default model<UserModel>('User', userSchema)

