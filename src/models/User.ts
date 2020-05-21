import {Schema, Document, model} from 'mongoose';

export interface User {
    name: string;
    age: number;
}

export interface UserModel extends User, Document {
    createdAt: Date;
}

const userSchema = new Schema({
    username: String,
    _createdAt: {type: Date, default: Date.now}
}, {
    versionKey: false
})

export default model<UserModel>('User', userSchema)
