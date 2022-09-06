const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const jobtypeSchema = new Schema(
    {
       
                jobtypename:{

                    type:String,
                    required:true,
                    unique:true,
                    
                }
        
    },
        {timestamps:true,
        }
)

    


const Jobtype = mongoose.model('jobtype',jobtypeSchema)
module.exports = Jobtype;