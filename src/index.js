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
        status: "admin",
        createdAt: new Date()
    }
]

app.post(`/cadastrar`, (request,response)=>{

    const { name, email, passworld, } = request.body

    User.push({
        id: uuid(),
        name,
        email,
        passworld,
        status: "user",
        createdAt: new Date()
    });

    response.status(201).json(User[User.length - 1]);
});

app.get(`/users`, (request,response)=>{

    const { email,passworld } = request.body;

    const verificarAdmin = User.some(
        (user) => user.email === email && user.passworld == passworld
    )

    if(!verificarAdmin){
        return response.status(401).json({Error: "senha ou email incorreto!"});
    }

    return response.json(User);
});


app.listen(3333);