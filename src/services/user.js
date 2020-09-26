const user = require('../database_queries/user');

async function getAllUsers() {
    var users = await user.getAllUsers();

    if (!users) {
        return {
            statusCode: 400,
            msg: 'Erro ao buscar os Usuários'
        };
    }

    return users;
}

async function getUser(id) {
    var usr = await user.getUser(id);

    if (!usr) {
        return {
            statusCode: 400,
            msg: 'Erro: usuario não encontrado'
        };
    }

    return usr;
}

async function setUser(p) {
    var usr = await user.setUser(p);

    if (!usr) {
        return {
            statusCode: 400,
            msg: 'Erro: ao inserir a user ' + p.nome
        };
    }

    return usr;
}

async function updateUser(id, p) {
    var usr = await user.updateUser(id, p);

    if (!usr) {
        return {
            statusCode: 400,
            msg: 'Erro: user não encontrada'
        };
    }

    return usr;
}

async function deleteUser(id) {
    var usr = await user.deleteUser(id);

    if (!usr) {
        return {
            statusCode: 400,
            msg: 'Erro: user não encontrada'
        };
    }

    return usr;
}
module.exports = { getAllUsers, getUser, setUser, updateUser, deleteUser };