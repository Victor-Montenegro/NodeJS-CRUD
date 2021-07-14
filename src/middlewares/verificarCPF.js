const { request, response} = require(`express`);

const User = require(`../models/User`);

module.exports.verificarCPF = async (req = request, res = response, next) =>{

    const { cpf } = req.body;


    const user = await User.findOne({cpf:cpf}).exec();


    if(user){

        return res.status(400).json({error:"Usuario já cadastrado!"});
    }

    return next();

}