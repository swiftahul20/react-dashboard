// import User from '../models/UserModels.js';

// export const getUsers = async (request, response) => {
//     try {
//         const users = await User.find();
//         response.json(users);
//     } catch (error) {
//         response.status(500).json({message: error.message})
//     }
// }

// export const getUsersById = async (request, response) => {
//     try {
//         const user = await User.findById(request.params.id);
//         response.json(user);
//     } catch (error) {
//         response.status(404).json({message: error.message})
//     }
// }

// export const saveUser = async (request, response) => {
//     const user = new User(request.body);
//     try {
//         const inserteduser = await user.save();
//         response.status(200).json(inserteduser);
//     } catch (error) {
//         response.status(400).json({message: error.message})
//     }
// }

// export const updateUser = async (request, response) => {
//     try {
//         const updateeduser = await User.updateOne({_id:request.params.id}, {$set: request.body})
//         response.status(200).json(updateeduser);
//     } catch (error) {
//         response.status(400).json({message: error.message})
//     }
// }

// export const deleteUser = async (request, response) => {
//     try {
//         const deleteuser = await User.deleteOne({_id:request.params.id})
//         response.status(201).json(deleteuser);
//     } catch (error) {
//         response.status(400).json({message: error.message})
//     }
// }

const db = require('../models');
const Users = db.user;

exports.create = (req, res) => {
    
    req.body.first_name = new String(req.body.first_name)

    Users.create(req.body)
    try {
        res.send({message: "Data stored."})
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

exports.findAll = (req, res) => {
    Users.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}))
}

exports.show = (req, res) => {
    const id =  req.params.id;

    Users.findById(id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}))
}

exports.update = (req, res) => {
    const id =  req.params.id;

    Users.findByIdAndUpdate(id, req.body, {UserFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({message: "Server | cannot update data"})
            }
            res.send({message: "Server | Data has been updated."})
        })
        .catch(err => res.status(500).send({message: err.message}))
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Users.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({message: "Server | Cannot delete data."})
            }
            res.send({message: "Server | Data deleted."})
        })
        .catch(err => res.status(500).send({message: err.message}))
}