const user = require('../repository/user');

async function getAll() {
    var users = await user.getAll();

    if (!users) {
        return {
            statusCode: 400,
            msg: 'Erro ao buscar os Usuários'
        };
    }

    return users;
}

async function get(id) {
    var usr = await user.get(id);

    if (!usr) {
        return {
            statusCode: 400,
            msg: 'Erro: usuario não encontrado'
        };
    }

    return usr;
}

async function post(p) {
    var usr = await user.post(p);

    if (!usr) {
        return {
            statusCode: 400,
            msg: 'Erro: ao inserir a user ' + p.nome
        };
    }

    return usr;
}

async function put(p) {
    var usr = await user.put(p);

    if (!usr) {
        return {
            statusCode: 400,
            msg: 'Erro: user não encontrada'
        };
    }

    return usr;
}

async function del(id) {
    var usr = await user.del(id);

    if (!usr) {
        return {
            statusCode: 400,
            msg: 'Erro: user não encontrada'
        };
    }

    return usr;
}
module.exports = { getAll, get, post, put, del };