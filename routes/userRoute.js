//// import
const express = require('express');
const router = express.Router();
const Users = require('../models/User');

        /***** Start Getting all the users *****/
                //Path: /api/contact
                    //Port =5000

router.get('/',async (req,res)=>{
    try{
        const user = await Users.find();
        res.send(user);
    } catch (err) {
            res.send({message:err});
    }
})
                /****End**** */


        /***** Start Adding persons *****/
            // Path:/add
                //Port :5000
router.post('/add', async (req, res) => {
  const { lastName, firstName, email, age } = req.body;
  try {
    const newUser = new Users({firstName , lastName , email , age});
   await newUser.save();
    res.status(200).send({
      user: newUser,
      msg: "user is saved",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "can not save the user" , error  });
  }})
                /**** End ****/


         /**** Start Editing A User By ID ****/
            //Path:/api/contact/:userID
  router.put('/:userID', async (req,res)=>{
    const id = req.params.userID;
    try{
      await Users.findByIdAndUpdate(id,{...req.body} , {new : true});
      res.status(200).send({
        Users,
        msg:"User Modified with success"
      });
    } catch (error) {
      res.status(500).send({msg:"can not modify the user"}, error);
    }
    
  });
                 /***** End *****/


            /***** Start the Delete *****/
                //Path:/api/contact/:userID
  router.delete('/:userID', async (req, res)=>{
    const id = req.params.userID;
    try{
      await Users.findByIdAndDelete(id);
      res.status(200).send({msg:"User deleted with success"});
    } catch (error) {
      res.status(500).send({msg:"can not delete the user"}, error);
    }
  });
                    /***** End *****/


module.exports = router;