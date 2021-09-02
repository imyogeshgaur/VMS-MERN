const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = mongoose.Schema({
    adminName:{
        type:String,
        require:true,
    },
    adminEmail:{
        type:String,
        require:true,
    },
    adminPhone:{
        type:String,
        require:true,
    },
    adminAddress:{
        type:String,
        require:true,
    },
    adminPassword:{
        type:String,
        require:true
    }
});

adminSchema.pre("save",async function(next){
    if(this.isModified("adminPassword")){
        this.adminPassword = await bcrypt.hash(this.adminPassword,12)
    }
    next();
  });

module.exports = mongoose.model("Admin",adminSchema)