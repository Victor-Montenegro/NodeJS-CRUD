const express = require(`express`);
const { v4: uuid } = require(`uuid`);

const app = express();

app.use(express.json());

let User = []

app.post(`/account`, (request,response)=>{

    const { name, email, passworld, } = request.body

    User.push({
        id: uuid(),
        name,
        email,
        passworld,
        createdAt: new Date()
    });

    response.status(201).json(User[User.length - 1]);
});


app.listen(3333);