const router = require('express').Router();

let project = require('../project.model');

router.route('/insertproject').post((req, res) => {

  
    const projectName = req.body.projectName;
    const projectdetails = req.body.projectdetails;
    const projectduration = req.body.projectduration;
  
    

    const newproject = new project(

        {
           
            projectName,
            projectdetails,
            projectduration
            

        }
    )

    newproject.save()
        .then((data) => {
            res.json(data)
        })

        .catch((err) => {

            // res.status(400).json('error', err)
            console.log(err)
        })
})

router.route('/getproject').get((req,res) =>
{
    project.find()
  .then((result) => res.json(result))
  .catch((err) => console.log(err))

}

)
router.route('/:id').get((req,res) =>
{
    project.findById(req.params.id)
  .then((result) => res.json(result))
  .catch((err) => console.log(err))

}

)

router.route('/update/:id').post((req,res) =>{
  console.log(req.params.id)
  project.findById(req.params.id)
  .then(res =>{
    console.log('response'+res);
  
    res.projectName = req.body.projectName,
    res.projectdetails = req.body.projectdetails,
    res.projectduration = req.body.projectduration,
   

    
    res.save()
    .then(res => console.log(res))
    .catch(err => console.log(err))


  })
})

router.route('/:id').delete((req,res) =>
{
    project.findByIdAndDelete(req.params.id)
  .then(() =>res.json('project deleted'))
  .catch(() =>console.log(err))
}
)

module.exports = router;

