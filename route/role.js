const router = require('express').Router();

let role = require('../role.model');

router.route('/insertrole').post((req, res) => {

  
    const roleName = req.body.roleName;
    

    const newrole = new role(

        {
           
            roleName
            

        }
    )

    newrole.save()
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
    role.find()
   
  .then((result) => res.json(result))
  .catch((err) => console.log(err))

}

)
router.route('/:id').get((req,res) =>
{
    role.findById(req.params.id)
  .then((result) => res.json(result))
  .catch((err) => console.log(err))

}

)

router.route('/update/:id').post((req,res) =>{
  console.log(req.params.id)
  role.findById(req.params.id)
  .then(res =>{
    console.log('response'+res);
    
    res.roleName = req.body.roleName,

    res.save()
    .then(res => console.log(res))
    .catch(err => console.log(err))


  })
})

router.route('/:id').delete((req,res) =>
{
    role.findByIdAndDelete(req.params.id)
  .then(() =>res.json('project deleted'))
  .catch(() =>console.log(err))
}
)

module.exports = router;

