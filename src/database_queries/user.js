const User = require('../models/user');

async function getUser(id) {
    return await User.findOne({
        where: {
            id: id
        }
    });
}

async function getAllUsers() {
    return await User.findAll();
}

async function setUser(p) {
    await User.create(p);
}

async function updateUser(id, user) {
    await User.update(user, { 
        where: { 
            id: id 
        } 
    });
}

async function deleteUser(id) {
    await User.destroy({ 
        where: { 
            id: id 
        } 
    });
}

module.exports = { getUser, getAllUsers, setUser, updateUser, deleteUser };