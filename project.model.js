const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema(
    {
        
             

            projectName:{
                    
                    type:String,
                    required:true,
                    unique:false,
                    minlenght:4
                },

                projectdetails:{
                    
                    type:String,
                    required:true,
                    unique:false,
                    minlenght:10
                },
                
                projectduration:{
                    
                    type:String,
                    required:true,
                    unique:false,
                    minlenght:4
                },

                
    },
        {timestamps:true,
        }
)

    


const project = mongoose.model('project',projectSchema)
module.exports = project;