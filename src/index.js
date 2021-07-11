const express = require(`express`);
const { v4: uuid } = require(`uuid`);

const mongoose = require(`./database/index.js`);

const app = express();

app.use(express.json());

const UserSchema = new mongoose.Schema({
    _id: {type: String, default: () => uuid()},
    name: {type: String, require: true},
    email: {type: String, require: true},
    cpf: {type: String, require: true},
    passworld: { type: String, require: true},
    createdAt: {type: Date, default: Date.now}
})

const User = mongoose.model("user", UserSchema);


function verificarCPF(request, response, next){

    const { cpf } = request.headers

    const user = User.find( 
        (user) => user.cpf === cpf
    );

    if(!user){
        return response.status(400).json({error: "usuario não encontrado!"});
    }

    request.user = user;

    next();
}

app.post(`/cadastrar`, (request,response)=>{

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

    const { cpf } = request.params;

    const { user } = request;

    return response.json(user);
    
});

app.put(`/user`,verificarCPF, (request,response)=>{

    const { name } = request.body;

    const { user } = request;

    user.name = name;

    return response.send({mensagem:"Atualização realizada com sucesso!"});

});

app.delete(`/user`,verificarCPF, (request,response)=>{

    const { user } = request;

    User.splice(User.indexOf(user),1);

    return response.json(User);

});


app.listen(3333, ()=>{
    console.log(`server ON port: 3333`)
});