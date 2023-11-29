const mongoose = require('mongoose');
const {config} = require("../config/secret")

main().catch(err => console.log(err));

async function main() {
    mongoose.set('strictQuery' , false);
    // await mongoose.connect('mongodb://127.0.0.1:27017/class_29');
  await mongoose.connect(`mongodb+srv://${config.userDb}:${config.passDb}@cluster0.yeykkea.mongodb.net/class_29`);
  console.log("mongo connect ")
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

