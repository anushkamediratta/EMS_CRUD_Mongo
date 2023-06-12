const express= require('express')
const Employee=require('../model/employee.model')
const { log } = require('handlebars')
const router=express.Router()

router.get("/",(req,res)=>{
    res.render("home")
})

router.get("/add-emp",(req,res)=>{
    res.render("addEmp")
})

router.post("/save-emp", async (req, res) => {
    try {
      let Emp = new Employee();
      Emp.fullName = req.body.FullName;
      Emp.email = req.body.Email;
      Emp.mobile = req.body.PhoneNumber;
      Emp.city = req.body.City;
  
      const result = await Emp.save();
      res.redirect("/emp");
    } catch (err) {
      console.log("Save Error: ", err);
    }
  });
  


router.get("/show-all-emp",async (req,res)=>{
// 

try {
    const result = await Employee.find().exec();
    res.render('showEmp', { list: result });
  } catch (err) {
    console.log('error', err);
  }
  
})


module.exports=router

