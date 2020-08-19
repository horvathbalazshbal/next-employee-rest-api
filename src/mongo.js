import mongoose from 'mongoose';
export default function (handler) {
    return async function (req, res) {
        //1. adatbázishoz csatlakozás
        const url = "mongodb://localhost:27017/feladat";

        const connection = await mongoose.createConnection(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        console.log('connected to database')
        // 2. először a séma megtervezése
        const EmployeeSchema = new mongoose.Schema({
            name: String,
            age: Number,
            isActive: Boolean
        });
        //3. séma modellezése
        const Employee = connection.model('Employee', EmployeeSchema);

        //4.  mindig az aktuális végpont handlere fog lefutni itt tudunk átadni bármilyen plusz paramétert
        await handler(req, res, Employee);
        //5. lezárni az connection databas-t
        connection.close();
        console.log('conncetion close')
    }
};