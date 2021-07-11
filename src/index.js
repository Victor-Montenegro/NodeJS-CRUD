const express = require(`express`);
const { v4: uuid } = require(`uuid`);
const { hash } = require(`bcryptjs`);

const mongoose = require(`./database/index.js`);

const app = express();

app.use(express.json());

const UserSchema = new mongoose.Schema({
    _id: {type: String, default: () => uuid()},
    name: {type: String, require: true},
    email: {type: String, require: true},
    cpf: {type: String, require: true},
    passworld: { type: String, require: true, select:false},
    createdAt: {type: Date, default: Date.now}
})

const User = mongoose.model("user", UserSchema);


async function verificarCPF(request, response, next){

    const { cpf } = request.headers

    const user = await User.findOne({cpf: cpf}).exec();

     if(!user){
         return response.status(400).json({error: "usuario não encontrado!"});
     }

     request.user = user;

    next();
}

app.post(`/cadastrar`, async(request,response)=>{

    request.body.passworld = await hash(request.body.passworld, 8);
    
    const user = new User(request.body);

    user.save(function(err){
        if (err){
            console.log(err);
            return response.status(500).json({error: "Um error inesperado!"});
        }
    });

    response.status(201).json(user);
});

app.get(`/users`, async (request,response)=>{

    const user = await User.find({});

    if(user.length == 0){
        return response.status(200).json({mensagem: "não existem usuarios!"});
    }

    return response.json(user);
});

app.get(`/user`,verificarCPF, (request,response)=>{


    const { user } = request;

    return response.json(user);
    
});

app.put(`/user`,verificarCPF, async (request,response)=>{

    const { name } = request.body;

    const { user } = request;

    await User.updateOne(user,{name: name});

    return response.send({mensagem:"Atualização realizada com sucesso!"});

});

app.delete(`/user`,verificarCPF, async(request,response)=>{

    const { user } = request;

    await User.deleteOne(user);

    return response.json(user);

});


app.listen(3333, ()=>{
    console.log(`server ON port: 3333`)
});