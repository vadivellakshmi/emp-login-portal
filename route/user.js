const router = require('express').Router();

let user = require('../user.model');

router.route('/insertuser').post((req, res) => {
  

    const EmployeeId = req.body.EmployeeId;
    const name = req.body.name;
    const profilePictureURL = req.body.profilePictureURL;
    const gender = req.body.gender;
    const companyname = req.body.companyname;
    const levebalance = req.body.levebalance;
    const leavetaken = req.body.leavetaken;
    const dateOfBirth = req.body.dateOfBirth;
    const address = req.body.address;
    const dateOfJoining = req.body.dateOfJoining;
    const phoneNo = req.body.phoneNo;
    const salary = req.body.salary;
    const Jobtype = req.body.Jobtype;
    const idProofname = req.body.idProofname;
    const jobrole = req.body.jobrole;
    const idProof = req.body.idProof;
    const email = req.body.email;
    const reporteeId = req.body.reporteeId;
    const projectName = req.body.projectName;
    const isAdmin = req.body.isAdmin;
    const globellevel = req.body.globellevel;
    const Department = req.body.Department;
    const password = req.body.password;
    const ConfirmPassword = req.body.ConfirmPassword;

    if(password !=ConfirmPassword){
      return res.status(403).send("ConfirmPassword invalid")
    }

    const newuser = new user(

        {
            EmployeeId,
            name,
            profilePictureURL,
            levebalance,
            leavetaken,
            gender,
            dateOfBirth,
            address,
            dateOfJoining,
            phoneNo,
            salary,
            Jobtype,
            idProofname,
            idProof,
            jobrole,
            email,
            reporteeId,
            projectName,
            isAdmin,
            Department,
            globellevel,
            password,
            ConfirmPassword,
            companyname

        }
    )
    
    
    newuser.save()
        .then((data) => {
            res.json(data)
        })

        .catch((err) => {

            // res.status(400).json('error', err)
            console.log(err)
        })
})


router.route('/getuser').get((req,res) =>
{
  user.find()
  .then((result) => res.json(result))
  .catch((err) => console.log(err))

}

)
router.route('/:id').get((req,res) =>
{
  user.findById(req.params.id)
  .then((result) => res.json(result))
  .catch((err) => console.log(err))

}

)

router.route('/update/:id').post((req,res) =>{
  console.log(req.params.id)
  user.findById(req.params.id)
  .then(res =>{
    console.log('response'+res);
    
    res.EmployeeId = req.body.EmployeeId,
    res.name = req.body.name,
    res.profilePictureURL = req.body.profilePictureURL,
    res.levebalance = req.body.levebalance,
    res.leavetaken = req.body.leavetaken,
    res.gender = req.body.gender,
    res.dateOfBirth = req.body.dateOfBirth,
    res.address = req.body.address,
    res.dateOfJoining = req.body.dateOfJoining,
    res.phoneNo = req.body.phoneNo,
    res.salary = req.body.salary,
    res.Jobtype = req.body.Jobtype,
    res.idProofname = req.body.idProofname,
    res.idProof = req.body.idProof,
    res.jobrole = req.body.jobrole,
    res.email = req.body.email,
    res.reporteeId = req.body.reporteeId,
    res.projectName = req.body.projectName,
    res.isAdmin = req.body.isAdmin,
    res.globellevel = req.body.globellevel,
    res.Department = req.body.Department,
    res.password = req.body.password,
    res.ConfirmPassword = req.body.ConfirmPassword,
    res.companyname = req.body.companyname,

    res.save()
    .then(res => console.log(res))
    .catch(err => console.log(err))


  })
})

router.route('/:id').delete((req,res) =>
{
  user.findByIdAndDelete(req.params.id)
  .then(() =>res.json('project deleted'))
  .catch(() =>console.log(err))
}
)

module.exports = router;

