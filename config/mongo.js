// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = mongoose;


const {connect} = require('mongoose');
require('dotenv').config();
// const db_url = process.env.MONGODB_URI;

const mongoConnect = async(db_url)=>{
    try{
        await connect(db_url);
        console.log("Connectected to mongodb");
    }catch(err){
        console.error('Error connecting to MongoDB:',err);
       
    }
   
}

module.exports=mongoConnect;