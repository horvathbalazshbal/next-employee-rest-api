import mongo from '../../mongo';

const handler = async (req, res, Employee) => {
    //maga a végpont lekódolva
    const newEmployee = new Employee(req.body);
    await newEmployee.save() // a save functionnel teszem bele a databasebe az adatokat
    console.log('save to database');
    console.log('create végpont');
    res.status(200).send(newEmployee._id);

}
export default mongo(handler);