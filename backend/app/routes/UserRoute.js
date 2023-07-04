// import express from 'express';
// import { 
//     getUsers, 
//     getUsersById,
//     saveUser,
//     updateUser,
//     deleteUser
//         } from '../app/config/controllers/UserController.js';
// const router = express.Router();

// router.get('/users', getUsers);
// router.get('/users/:id', getUsersById);
// router.post('/users', saveUser);
// router.patch('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);

// export default router;

module.exports = app => {
    const users = require('../controllers/UserController')
    const r = require('express').Router();

    r.get("/", users.findAll);
    r.get("/:id", users.show);
    r.post("/", users.create);
    r.put("/:id", users.update);
    r.delete("/:id", users.delete);

    app.use('/users', r);

    
}