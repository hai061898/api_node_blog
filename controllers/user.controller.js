const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function singUp(req,res){
    models.User.findOne({where:{email:req.body.email}}).then(result=>{
        //finOne chỉ có 1 email
        if(result){
            res.status(409).json({
                message: "Email already exists!",
            });
        } else {
            bcryptjs.genSalt(10,function(err, salt){  
                //genSalt tạo chuỗi 
                bcryptjs.hash(req.body.password,salt,function(err,hash){
                    const user = {
                        name: req.body.name,
                        email:req.body.email,
                        password: hash
                    }

                    models.User.create(user).then(result=>{
                        res.status(201).json({
                            message: "User created successfully",
                        });
                    }).cacth(error =>{
                        res.status(500).json({
                            message: "Something went wrong!",
                        });
                    });

                });
            });
        }
    }).cacth(error=>{
        res.status(500).json({
            message: "Something went wrong!",
        });
    });


}
function login(req,res){  
    models.User.findOne({where:{email: req.body.email}}).then(user=>{
        if(user === null){
            res.status(401).json({
                message: "Invalid credentials!",
            });
        } else {
            bcryptjs.compare(req.body.password,user.password,function(err,result){
                if(result){
                    const token = jwt.sign({
                        email:user.email,
                        userId:user.id
                    },process.env.JWT_KEY,function(err,token){
                        res.status(200).json({
                            message: "Authentication successful!",
                            token: token
                        });
                    });
                } else {
                    res.status(401).json({
                        message: "Invalid credentials!",
                    });
                }
            });
        }
    }).cacth(error=>{
        res.status(500).json({
            message: "Something went wrong!",
        });
    });
}

module.exports = {
    singUp:singUp,
    login:login
}