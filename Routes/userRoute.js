const router = require('express').Router();
const User = require("../Models/userModel");

router.get('/',(req,res)=>{
    res.status(200).send({message:"Welcome To Visitor Management System !!!"});
});

router.post("/user/register", async (req, res) => {
const {userName,userEmail,userPhone,userAddress,userPassword} = req.body;
    try {
        const userPhoneExist = await User.findOne(adminPhone);
        const userEmailExist = await User.findOne(adminEmail);
        if(userPhoneExist){
            res.status(409).send({message:"User Already Exist !!!"});
        }else if(userEmailExist){
            res.status(409).send({message:"User Already Exist !!!"});
        }
        const newUser = new User({userName,userEmail,userPhone,userAddress,userPassword});
        await newUser.save();
        res.status(200).send({message:"User Created Successfully !!!"});
    } catch (error) {
        res.status(500).send({message:"Some Error Occured !!!"});
      console.log(error);
    }
  });

module.exports = router;