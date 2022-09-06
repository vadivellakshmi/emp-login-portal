const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const idproofSchema = new Schema(
    {
        

                idproofName:{

                    type:String,
                    required:true,
                    unique:true,
                    minlenght:4
                }
        
    },
        {timestamps:true,
        }
)

    


const idproof = mongoose.model('idproof',idproofSchema)
module.exports = idproof;