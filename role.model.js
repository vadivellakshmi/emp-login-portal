const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const roleSchema = new Schema(
    {
        
                roleName:{

                    type:String,
                    required:true,
                    unique:true,
                    minlenght:4
                }
        
    },
        {timestamps:true,
        }
)

    


const role = mongoose.model('role',roleSchema)
module.exports = role;