const router = require('express').Router();

let idproof = require('../idproof.model');

router.route('/insertidproof').post((req, res) => {

    const idproofId = req.body.idproofId;
    const idproofName = req.body.idproofName;
    

    const newidproof = new idproof(

        {
          
            idproofName,
            

        }
    )

    newidproof.save()
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
  idproof.find()
   
  .then((result) => res.json(result))
  .catch((err) => console.log(err))

}

)
router.route('/:id').get((req,res) =>
{
  idproof.findById(req.params.id)
  .then((result) => res.json(result))
  .catch((err) => console.log(err))

}

)

router.route('/update/:id').post((req,res) =>{
  console.log(req.params.id)
  idproof.findById(req.params.id)
  .then(res =>{
    console.log('response'+res);
    
   
    res.idproofName = req.body.idproofName,

    res.save()
    .then(res => console.log(res))
    .catch(err => console.log(err))


  })
})

router.route('/:id').delete((req,res) =>
{
  idproof.findByIdAndDelete(req.params.id)
  .then(() =>res.json('project deleted'))
  .catch(() =>console.log(err))
}
)

module.exports = router;

