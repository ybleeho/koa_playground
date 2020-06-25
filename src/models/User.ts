import {Schema, Document, model} from 'mongoose';

export interface User {
    name: string;
    age: number;
    address: string;
    number: string;
}

export interface UserModel extends User, Document {
    createdAt: Date;
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
