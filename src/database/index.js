const mongoose = require(`mongoose`);

mongoose.connect(`mongodb://localhost/NodeJs-CRUD`,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;
console.log("conexão criada");

module.exports = mongoose;