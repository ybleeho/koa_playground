import mongoose, {Mongoose} from 'mongoose'

const {connect, connection} = mongoose

class Db {
    public static connect = async (): Promise<Mongoose> => {
        connection.on('error', err => { console.error('%s', err) })
            .on('close', () => console.log('Database connection closed.'))
            .once('open' , () => console.log('Connected to db.'));
        return  connect("mongodb://mongodb:27017/playground", {useNewUrlParser: true})
    }
}

export default Db;
