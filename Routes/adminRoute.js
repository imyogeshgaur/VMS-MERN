const router = require("express").Router();
const Admin = require("../Models/adminModel");

router.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome To Visitor Management System !!!" });
});

router.post("/admin/register", async (req, res) => {
const {adminName,adminEmail,adminPhone,adminAddress,adminPassword} = req.body;

  try {
    const adminPhoneExist = await Admin.findOne(adminPhone);
    const adminEmailExist = await Admin.findOne(adminEmail);
    if(adminPhoneExist){
        res.status(409).send({message:"Admin Already Exist !!!"});
    }else if(adminEmailExist){
        res.status(409).send({message:"Admin Already Exist !!!"});
    }
    const newAdmin = new Admin({adminName,adminEmail,adminPhone,adminAddress,adminPassword});
    await newAdmin.save();
    res.status(200).send({message:"Admin Created Successfully !!!"});
  } catch (error) {
    res.status(500).send({message:"Some error Occured !!!"});
    console.log(error);
  }
});

module.exports = router;
