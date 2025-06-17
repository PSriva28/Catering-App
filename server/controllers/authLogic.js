const bcrypt = require('bcrypt');
const UserModel = require("../model/UserModel.js");
const jwt = require("jsonwebtoken");
//@desc Post request for registering the users
//@path http://localhost:5000/api/auth/register
//@access public
    const Register = (async (req,res)=>{
        // res.status(201).json({message : "User registered successfully."})
        const {username, email, password } = req.body
        try {
            if(!username || !email || !password ){
               return res.status(400).json({message : "All fields are mandatory!"});
            }
            const userCheck = await UserModel.findOne({email})
            if(userCheck){
                return res.status(400).json({message : "User already exists!!"})
            }
            const hashpw = await bcrypt.hash(password, 10)
            const newUser = await UserModel.create({username, email, password : hashpw})
            if(newUser){
                return res.status(201).json({message: "Registration successfully.", output : newUser.username})
            }
            else {return res.status(404).json({message : "Registration Failed! Please try again."})}
        }
        catch(err){
            return res.status(500).json({message : "Interal Server error", err})
        }

    });

//@desc Post request for loginning the users
//@path http://localhost:5000/api/auth/login
//@access public
    const Login = (async (req,res)=>{
        // res.status(200).json({message : "User login successfully."})
        try{
        const {email, password} = req.body;
        // console.log(req.body)
            if(!email || !password){
                return res.status(400).json({message : "All fields are required!!"});
            }
            const userCheck = await UserModel.findOne({email});
            if(!userCheck){
                return res.status(400).json({message : "User doesn't exist!"})
            }
            if(userCheck && (await bcrypt.compare(password, userCheck.password))){
                const access_token = jwt.sign(
                    {user : { id: userCheck._id,
                            email: userCheck.email}},
                    process.env.SECRETKEY,
                    {expiresIn : "50"});
                   console.log(access_token)
                return res.status(200).json({message :"User Login successfully!", access_token, user: {id: userCheck._id,email: userCheck.email}})
            }
            else{
                return res.status(400).json({message : "The email or password is incorrect!"})
            }
        }
        catch(err){
            res.status(500).json({message : "Internal server error"})
        }

    });

    module.exports = {Register, Login}