const { Router } = require(`express`);

const { CreateUserController } = require(`./controllers/CreateUserController`);
const { ListUserController } = require(`./controllers/ListUserController`);
 
const  {verificarCPF} = require(`./middlewares/verificarCPF`);
const  { verificarUsuarioExistente } = require(`./middlewares/verificarUsuarioExistente`);
const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

router.post(`/cadastrar`, verificarCPF,createUserController.handle);

router.get(`/users`, listUserController.handle);
module.exports = {router};