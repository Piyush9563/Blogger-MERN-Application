const express=require('express');

const mongoose=require("mongoose");

const user=require("../models/userModel")

const router=express.Router();




router.post("/",async (req,res)=>
{
    const{ userid,name,email }=req.body;

    try{
    const userAdded=await user.create({
        userid: userid,
        name: name,
        email: email,
        
    });
    return res.send(201).json(userAdded);
}

catch(error)
{
  
     // return  res.send(400).json({error:error.message});
  

}
});


//GET
router.get("/", async (req, res) => {
    try {
      const allUsers = await user.find();
  
     return res.status(200).json(allUsers);
    } catch (error) {
   //  return res.status(500).json({ error: error.message });
    }
  });

//GET SINGLE USER
 router.get("/:id", async (req, res) => {
     const { id } = req.params;
  
     try {
       const singleUser = await user.findById({ _id: id });
      return res.status(200).json(singleUser);
     } catch (error) {
    //   return res.status(500).json({ error: error.message });
    }
   });

 
 

// DELETE
router.delete("/:id", async (req, res) => {
     const { id } = req.params;
     try {
       const deletedUser = await user.findByIdAndDelete({ _id: id });
       return res.status(201).json(deletedUser);
     } catch (error) {
     //  return res.status(400).json({ error: error.message });
     }
   });

  //UPDATE
 router.patch("/:id", async (req, res) => {
     const { id } = req.params;
   //  console.log("get body", req.body);
//    console.log("get id", id);
       const { name, email, age } = req.body;
    try {
      const updatedUser = await user.findByIdAndUpdate(id, req.body, {
         new: true,
       });
       return res.status(200).json(updatedUser);
     } catch (error) {
      // return res.status(400).json({ error: error.message });
     }
   });




 module.exports=router;
 
 
 