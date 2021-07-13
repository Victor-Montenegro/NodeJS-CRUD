const { Router } = require(`express`);

const { CreateUserController } = require(`./controllers/CreateUserController`);

const router = Router();

const createUserController = new CreateUserController();


router.post(`/cadastrar`, createUserController.handle);

module.exports = {router};