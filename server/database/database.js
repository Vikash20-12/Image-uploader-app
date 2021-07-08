const mongoose = require('mongoose');

const Connect = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        });
        console.log(`mongoDb connect to ${conn.connection.host}`)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = Connect;