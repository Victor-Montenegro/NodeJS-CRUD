const express = require(`express`);
const { v4: uuid } = require(`uuid`);

const mongoose = require(`./database/index.js`);

const app = express();

app.use(express.json());


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

    const { name, email, cpf, passworld, } = request.body

    User.push({
        id: uuid(),
        name,
        email,
        passworld,
        cpf,
        status: "user",
        createdAt: new Date()
    });

    response.status(201).json(User[User.length - 1]);
});

app.get(`/users`, (request,response)=>{

    if(User.length == 0){
        return response.status(200).json({mensagem: "não existem usuarios!"});
    }

    return response.json(User);
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