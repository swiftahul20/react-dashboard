module.exports = (app) => {
  const users = require("../controllers/UserController");
  const router = require("express").Router();
  const { body } = require("express-validator");

  router.get("/", users.findAll);
  router.get("/:id", users.show);
  router.post(
    "/",
    [
      body("first_name").isLength({ min: 2 }).withMessage('First Name min 2 characters'),
      body("last_name").isLength({ min: 2 }),
      body("gender").notEmpty(),
      body("phone").isLength({min: 4}).withMessage('Phone is required'),
      body("address.street_name").notEmpty().withMessage('Street Name is required'),
      body("address.province").notEmpty().withMessage('Province is required'),
      body("address.regency").notEmpty().withMessage('Regency is required'),
      body("address.district").notEmpty().withMessage('District is required'),
      body("email").isEmail().withMessage('Email is required'),
    ],
    users.create // nama controller.nama create.
  );
  router.put("/:id", users.update);
  router.delete("/:id", users.delete);

  app.use("/users", router);
};
