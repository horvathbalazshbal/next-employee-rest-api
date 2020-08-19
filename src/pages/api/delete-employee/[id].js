import mongo from '../../../mongo';

const handler = async (req, res, Employee) => {
    const id = req.query.id;
    console.log(id);
    await Employee.findByIdAndDelete(id);
    res.status(200).send('delete');

}
export default mongo(handler);