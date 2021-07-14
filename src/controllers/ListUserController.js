const { request, response } = require(`express`);

const User = require(`../models/User`); 

class ListUserController{

    async handle(req = request, res = response){
        
        const user = await User.find({});

        if(!user){

            return res.status(404).json({message:"Usuario não encontrado!"});
        }

        return res.json(user);
    }
}

module.exports = { ListUserController };