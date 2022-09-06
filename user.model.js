const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        EmployeeId:{
            type:String,
            required:true,
            unique:true,
            minlenght:4
        },
       name:{
            type:String,
            required:true,
            unique:false,
            minlenght:4
        },
        companyname:{
            type:String,
            required:true,
            unique:false,

        },

        profilePictureURL:{
            type:String,
            required:true,
            unique:false,
        },

        levebalance:{
            type:Number,
            required:true,
            unique:false,
        },
        leavetaken:{
            type:Number,
            required:true,
            unique:false,
        },
        gender:{
            type:String,
            required:true,
            unique:false,
         },
         dateOfBirth:{
            type:String,
            required:true,
            unique:false,
            },

            address:{
                type:String,
                required:true,
                unique:false,
                        },
        dateOfJoining:{
            type:String,
            required:true,
            unique:false,
            },

            phoneNo:{
                type:Number,
                required:true,
                unique:true,
                minlenght:8,
                maxlenght:10,
                },

         salary:{
            type:Number,
            required:true,
            unique:false,
            },  

            Jobtype:{
                type:String,
                required:true,
                unique:false,
                }, 

            idProofname:{
                type:String,
                required:true,
                unique:false,
                },   
          
            idProof:{
                type:String,
                required:true,
                unique:true,
                },   

                jobrole:{
            type:String,
            required:true,
            
        },
        isAdmin:{
            type:Boolean,
            required:true,
            unique:false,
        },

        globellevel:{
            type:String,
            required:true,
            unique:false,
        },
        Department:{
            type:String,
            required:true,
            unique:false,
        },

        email:{
            type:String,
            required:true,
            unique:true,
          
        },

        reporteeId:{
            type:String,
            required:true,
            
        },

        projectName:{
            type:String,
            required:true,
            unique:false,
            minlenght:4,
        
          
        },
        password:{
            type:String,
            required:true,
            unique:false,
            minlenght:5,
            maxlenght:12
          
        },
    ConfirmPassword:{
            type:String,
            required:true,
            unique:false,
            minlenght:5,
            maxlenght:12
          
        }
        },

        {timestamps:true,
        }
)

const user = mongoose.model('employeuser',userSchema)
module.exports = user;