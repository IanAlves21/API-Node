const user = require('../services/user');

async function getAllUsers(request, response) {
    return await user
        .getAllUsers()
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(q => {
            return response.status(200).send(q);
        });
}

async function getUser(request, response) {
    return await user
        .getUser(request.params.id)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(q => {
            return response.status(200).send(q);
        });
}

async function setUser(request, response) {
    return await user
        .setUser(request.body)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(q => {
            return response.status(200).send('Ok');
        });
}

async function updateUser(request, response) {
    return await user
        .updateUser(request.params.id, request.body)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(q => {
            return response.status(200).send('Ok');
        });
}

async function deleteUser(request, response) {
    return await user
        .deleteUser(request.params.id)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(q => {
            return response.status(200).send('Ok');
        });
}

module.exports = { getAllUsers, getUser, setUser, updateUser, deleteUser };