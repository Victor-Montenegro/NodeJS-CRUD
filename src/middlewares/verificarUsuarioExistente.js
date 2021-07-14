const { request, response} = require(`express`);

const User = require(`../models/User`);

module.exports.verificarUsuarioExistente = async(req = request, res = response, next)=>{

    const { cpf } = req.headers;

    const user = await User.findOne({cpf:cpf});


    if(!user){

        return res.status(404).json({error:"Usuario não encontrado!"});
    }

    req.user = user;

    return next();

}