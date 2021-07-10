const express = require(`express`);
const { v4: uuid } = require(`uuid`);

const app = express();

app.use(express.json());

let User = [
    {
        id: uuid(),
        name: "admin",
        email: "admin@admin.com",
        passworld: "123",
        cpf: "333.333.333.33",
        status: "admin",
        createdAt: new Date()
    }
]

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

    const { email,passworld } = request.body;

    const verificarAdmin = User.some(
        (user) => user.email === email && user.passworld == passworld
    );

    if(!verificarAdmin){
        return response.status(401).json({Error: "senha ou email incorreto!"});
    }

    return response.json(User);
});

app.get(`/user/:cpf`, (request,response)=>{

    const { cpf } = request.params;


    const user = User.find( 
        (user) => user.cpf === cpf
    );

    if(!user){

        return response.status(400).json({error: "usuario não encontrado!"});
    }

    return response.json(user);
    
});

app.put(`/user/:cpf`,(request,response)=>{

    const { cpf } = request.params;
    const { name } = request.body;

    const user = User.find(
        (user) => user.cpf === cpf
    )

    if(!user){

        return response.status(400).json({error: "usuario não encontrado!"});
    }

    user.name = name;

    return response.send();

});


app.listen(3333, ()=>{
    console.log(`server ON port: 3333`)
});