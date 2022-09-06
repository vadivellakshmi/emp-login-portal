const router = require('express').Router();
const jwt = require('jsonwebtoken');

let user = require('../user.model');

// router.post("/", async(req, res) => {

  router.route("/").post( async(req, res) => {

try{

  const { EmployeeId,  password } = req.body
  const exist = await user.findOne({ EmployeeId });
  if(!exist){
    return res.status(400).send('employee id not exist')
  }

  if(exist.password != password){

    return res.status(400).send('password invalid')
  }

 




  let payload = {
    user :{
      _id : exist._id,
      isAdmin:exist.isAdmin
    }
  }

  jwt.sign(payload,'test', {expiresIn:"3d"},
  (err,token) =>{
    if(err) throw err
    const {_id, EmployeeId, name, profilePictureURL, gender, companyname,levebalance,leavetaken,Department,isAdmin,dateOfBirth,address,dateOfJoining,phoneNo,salary,Jobtype,idProofname,idProof,jobrole,globellevel,email,reporteeId,projectId,} = exist
    return res.json({token,  user:{_id, EmployeeId, name, profilePictureURL, gender, companyname,levebalance,leavetaken,Department,isAdmin,dateOfBirth,address,dateOfJoining,phoneNo,salary,Jobtype,idProofname,idProof,jobrole,globellevel,email,reporteeId,projectId,}})
  })

  // res.status(200).json(exist);
}



    catch(err) {
  
      // res.status(400).json('error', err)
      console.log(err)
  }

})

    
          

module.exports = router;