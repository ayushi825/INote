const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/inotebook";
const connectToMongo = () => {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  }).then(()=>console.log("DB connection successful"))
  .catch((error)=>{
    console.log("issue in db connection")
    console.log(error)
    process.exit(1);
  })
};
module.exports = connectToMongo;
