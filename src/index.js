const express = require(`express`);

const { router } = require(`./router`);

const app = express();

app.use(express.json());

app.use(router);




// async function verificarCPF(request, response, next){

//     const { cpf } = request.headers

//     const user = await User.findOne({cpf: cpf}).exec();

//      if(!user){
//          return response.status(400).json({error: "usuario não encontrado!"});
//      }

//      request.user = user;

//     next();
// }


// app.get(`/users`, async (request,response)=>{

//     const user = await User.find({});

//     if(user.length == 0){
//         return response.status(200).json({mensagem: "não existem usuarios!"});
//     }

//     return response.json(user);
// });

// app.get(`/user`,verificarCPF, (request,response)=>{


//     const { user } = request;

//     return response.json(user);
    
// });

// app.put(`/user`,verificarCPF, async (request,response)=>{

//     const { name } = request.body;

//     const { user } = request;

//     await User.updateOne(user,{name: name});

//     return response.send({mensagem:"Atualização realizada com sucesso!"});

// });

// app.delete(`/user`,verificarCPF, async(request,response)=>{

//     const { user } = request;

//     await User.deleteOne(user);

//     return response.json(user);

// });


app.listen(3333, ()=>{
    console.log(`server ON port: 3333`)
});