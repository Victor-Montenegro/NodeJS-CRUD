const {request, response } = require(`express`);

const { hash } = require("bcryptjs");

const User  = require(`../models/User`);

class CreateUserController{

    async handle(req = request,res = response){
        
        req.body.passworld = await hash(req.body.passworld,8);  
        

        const user = new User(req.body);

        user.save(function(err){
            if (err){
                console.log(err);
                return response.status(500).json({error: "Um error inesperado!"});
            }
        });

        res.status(201).json(user);
    }
}

module.exports = {CreateUserController};