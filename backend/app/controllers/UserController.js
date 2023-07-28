const db = require("../models");
const Users = db.user;
const { validationResult } = require("express-validator");

exports.create = (req, res, next) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const gender = req.body.gender;
  const phone = req.body.phone;
  const dob = req.body.dob;
  const street_name = req.body.address.street_name;
  const province = req.body.address.province;
  const regency = req.body.address.regency;
  const district = req.body.address.district;
  const email = req.body.email;

  const errors = validationResult(req);

  const result = {
    message: "User Profile is submitted.",
    data: {
      first_name,
      last_name,
      gender,
      phone,
      dob,
      address: {
        street_name,
        province,
        regency,
        district,
      },
      email,
    },
  };

  if (!errors.isEmpty()) {
    const err = new Error("Invalid Value");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  } else {
    let data = req.body;
    Users.create(data);
    res.status(201).send(result);
  }
};

// exports.create = (req, res) => {
//   let data = req.body;
//   Users.create(req.body);

//   const errors = validationResult(req);

//   if (!errors.isEmpty()) {
//     const err = new Error("Invalid Value");
//     err.errorStatus = 400;
//     err.data = errors.array();
//     throw err;
//   }

//   try {
//     res.status(201).send(data);
//   } catch (error) {
//     res.status(400).send("Data is required");
//   }
//   res.end();
// };

exports.findAll = (req, res) => {
  Users.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.show = (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;

  Users.findByIdAndUpdate(id, req.body, { UserFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Server | cannot update data" });
      }
      res.send({ message: "Server | Data has been updated." });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Users.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Server | Cannot delete data." });
      }
      res.send({ message: "Server | Data deleted.", data });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
