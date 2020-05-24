import {connect, connection, Mongoose} from 'mongoose'

export default function connectDatabase (): Promise<Mongoose> {
    connection.on('error', err => { console.error('%s', err) })
        .on('close', () => console.log('Database connection closed.'))
        .once('open' , () => console.log('Connected to db.'));
    return connect("mongodb://localhost:27017/playground")
}
