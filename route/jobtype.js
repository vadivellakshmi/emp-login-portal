const router = require('express').Router();

let jobtype = require('../jobtype.model');

router.route('/insertjobtype').post((req, res) => {

  
    const jobtypename = req.body.jobtypename;
    

    const newjobtype = new jobtype(

        {
          
            jobtypename,
            

        }
    )

    newjobtype.save()
        .then((data) => {
            res.json(data)
        })

        .catch((err) => {

            // res.status(400).json('error', err)
            console.log(err)
        })
})

router.route('/get').get((req,res) =>
{
  jobtype.find()
   
  .then((result) => res.json(result))
  .catch((err) => console.log(err))

}

)
router.route('/:id').get((req,res) =>
{
  jobtype.findById(req.params.id)
  .then((result) => res.json(result))
  .catch((err) => console.log(err))

}

)

router.route('/update/:id').post((req,res) =>{
  console.log(req.params.id)
  jobtype.findById(req.params.id)
  .then(res =>{
    console.log('response'+res);
    
   
    res.jobtypename = req.body.jobtypename,

    res.save()
    .then(res => console.log(res))
    .catch(err => console.log(err))


  })
})

router.route('/:id').delete((req,res) =>
{
  jobtype.findByIdAndDelete(req.params.id)
  .then(() =>res.json('project deleted'))
  .catch(() =>console.log(err))
}
)

module.exports = router;

