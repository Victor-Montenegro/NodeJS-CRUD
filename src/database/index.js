const mongoose = require(`mongoose`);

mongoose.connect(`mongodb://localhost:27017/NodeJs-CRUD`,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`mongoDB on`);
});

mongoose.Promise = global.Promise;

mongoose.on

module.exports = mongoose;