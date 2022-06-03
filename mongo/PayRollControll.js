const PayRoll = require("./SchemaPayRoll");

async function addPayRoll(req, res) {
  console.log(req.body);

  try {
    const {
      name,
      lastname,
      nomina,
      ingreso,
      baja,
      puesto
    } = req.body;

    const payroll = PayRoll({
      name,
      lastname,
      nomina,
      ingreso,
      baja,
      puesto
    });

    const payRollStored = await payroll.save();
    res.status(201).send({ payRollStored });

  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}

async function getPayRoll(req, res) {
  console.log(req);
  const payrolls = await PayRoll.find().exec()
  res.status(200).send({ payrolls });
}

async function deletePayRoll(req, res) {
  const _id = req.query._id;
  try {
    const result = await payrolls.findByIdAndDelete({ _id: _id });

    if (result) {
      res.json({
        estado: true,
        message: "eliminado",
      });
    } else {
      res.json({
        estado: false,
        message: "Fallo eliminar",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addPayRoll,
  getPayRoll,
  deletePayRoll
};
