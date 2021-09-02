const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        require:true,
    },
    userEmail:{
        type:String,
        require:true,
    },
    userPhone:{
        type:String,
        require:true,
    },
    userAddress:{
        type:String,
        require:true,
    },
    userPassword:{
        type:String,
        require:true
    }
});

userSchema.pre("save",async function(next){
    if(this.isModified("userPassword")){
        this.userPassword = await bcrypt.hash(this.userPassword,12)
    }
    next();
  });

module.exports = mongoose.model("User",userSchema)