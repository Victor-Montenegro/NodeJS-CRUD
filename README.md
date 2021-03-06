
## Instruções :wave:

    yarn add package.json || npm install package.json

    yarn dev || node src/index.js
----
    url: http://localhost:3333

    Route para cadastrar usuarios: METHOD POST http://localhost:3333/cadastrar
    Ex: Passando os dados em json 
    body:
        {
            "name": "Joao",
            "email": "jvc@jvc.com",
            "cpf": "222.222.222.22",
            "passworld": "123"
        }

    response: 
         {
            "id": "67af0077-6198-423e-ab44-db950a382339",
            "name": "Joao",
            "email": "jvc@jvc.com",
            "passworld": "123",
            "cpf": "222.222.222.22",
            "createdAt": "2021-07-10T12:16:58.602Z"
        }

--------

    Route para visualizar todos os usuarios: METHOD GET http://localhost:3333/users
    

    response:
        [
            {
                "id": "5c055bda-871e-42f3-8ad6-fa68dd8ee274",
                "name": "Joao",
                "email": "jvc@jvc.com",
                "passworld": "123",
                "cpf": "222.222.222.22",
                "createdAt": "2021-07-10T12:25:00.299Z"
            }
        ]

--------

    Route para visualizar um usuario : METHOD GET http://localhost:3333/user
        
        deve passar o cpf no header do request
        header:
            cpf: 222.222.222.22

--------

    Route para atualizar o nome de um usuario : METHOD PUT http://localhost:3333/user

        deve passar o cpf no header do request
        header:
            cpf: 222.222.222.22
        Ex: passando os dados em json
        body
            {
                "name": "victor"
            }

--------

    Route para remover um usuario : METHOD DELETE http://localhost:3333/user

        deve passar o cpf no header do request
            header:
                cpf: 222.222.222.22       



# Victor Montenegro 

## Olá, tudo bem! :wave:
    Eu sou João Victor Montenegro Rocha, mas pode me chamar de João. Atualmente desenvolvendo aplicações web
    com nodejs e sempre estou em busca de crescimento e aprimoramento profissional e pessoal. 

    Estou disposto a trabalhar em um ambiente que proporcione conhecimento e crescimento profissional. Tenho como 
    objetivo de me atualizar para novas tecnologias e poder ajudar a comunidade e os novos developers.

 <br/> :purple_heart: Buscando colaborar com projetos no back-end, utilizando o framework nodejs.
 <br/> :blush: Com o que eu puder ajudar vou ajudar!
 <br/> :computer: O que estou aprendendo: javaScript, MongoDB, MySQL, Postgres, nodejs/TypeScript.
 <br/> 💬  &nbsp; Sobre mim: Curto tecnologias,podCasts, games, seriados e animações. 
 <br/> :email: Entre em contato comigo: [![Linkedin Badge](https://img.shields.io/badge/-VictorMontenegro-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://https://www.linkedin.com/in/joao-victor-montenegro-595791194/)](https://www.linkedin.com/in/joao-victor-montenegro-595791194/) 
 [![Gmail Badge](https://img.shields.io/badge/-jvcmontenegro67@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=victor:jvcmontenegro67@gmail.com)](victor:jvcmontenegro67@gmail.com)