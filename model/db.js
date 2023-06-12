const mongoose = require('mongoose');
const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);

    mongoose.connect('mongodb+srv://aishumendiratta30:shivam143@cluster0.nvo8srk.mongodb.net/?retryWrites=true&w=majority');
    console.log("Connected to Mongo Successfully!");

    
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
