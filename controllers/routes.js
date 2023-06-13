const express= require('express')
const Employee=require('../model/employee.model')
const { log } = require('handlebars')
const router=express.Router()

router.get("/",(req,res)=>{
    res.render("home")
    console.log("hello");
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
git 
try {
    const result = await Employee.find().exec();
    res.render('showEmp', { list: result });
  } catch (err) {
    console.log('error', err);
  }
  
})

router.get("/delete-all-emp", async (req, res) => {
  try {
    const result = await Employee.find();
    res.render('delete', { list: result });
  } catch (err) { 
    console.error(err);
  }
});

router.get("/final-delete/:uid", async (req, res) => {
  try {
    const result = await Employee.findByIdAndDelete(req.params.uid);
    res.redirect('/emp/delete-all-emp');
  } catch (err) {
    console.error(err);
  }
});

router.get("/update-all-emp", async (req, res) => {
  try {
    
    const result = await Employee.find();
    res.render('updateEmp', { list: result });
  } catch (err) { 
    console.error(err);
  }
});

router.get("/pre-update/:id", async (req, res) => {
  try {
    const result = await Employee.findById(req.params.id);
    res.render('preEmp', { emp: result });
  } catch (err) {
    console.log(err);
  }
});

// router.post("/final-update",(req,res)=>{
//   console.log(req.body)
//   Employee.findByIdAndUpdate(req.body.id,req.body,{new:true},(err,result)=>{
//     if(err){
//       console.log(err)
//     }else{
//       res.redirect("/emp/update-all-emp")
//     }
//   })
// })

router.post("/final-update", async (req, res) => {
  try {     
    await Employee.findByIdAndUpdate(req.body.id, req.body, { new: true });
    res.redirect('/emp/update-all-emp');
  } catch (err) {
    console.log(err);
  }
});


module.exports=router

