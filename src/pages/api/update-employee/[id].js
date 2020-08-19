import mongo from '../../../mongo';

const handler = async (req, res, Employee) => {
    const id = req.query.id;
    console.log(id);
    const isAct = req.body.isActive;
    console.log(isAct);
    await Employee.findByIdAndUpdate(id, { isActive: isAct });
    res.status(200).send(id);

}
export default mongo(handler);