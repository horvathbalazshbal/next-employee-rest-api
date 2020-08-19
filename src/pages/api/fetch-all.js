import mongo from '../../mongo';

const handler = async (req, res, Employee) => {
    //maga a végpont lekódolva
    const employees = await Employee.find({});
    res.status(200).send(employees);

}
export default mongo(handler);