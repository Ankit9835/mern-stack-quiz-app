const express = require('express')
const router = express.Router()
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', async (req,res) => {
    try {
        const userEmailExists = await User.find({email:req.body.email})
        if(userEmailExists.length > 0){
            return res.send({
                message:'user already exists',
                success:false
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        req.body.password = hashedPassword
        const newUser = new User(req.body)
        await newUser.save()
        res.send({
            message: "User created successfully",
            success: true,
            data:newUser
          });
    } catch (error) {
        res.send({
            message: error.message,
            data: error,
            success: false,
          });
    }
})

router.post('/login', async (req,res) => {
    try {
        const user = await User.findOne({email:req.body.email})
        if(!user){
            return res.send({
                message:'User not found for the given mail id',
                success:false
            })
        }
        const isValidPassword = bcrypt.compare(req.body.password, user.password)
        if (!isValidPassword) {
            return res
              .status(200)
              .send({ message: "Invalid password", success: false });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
          });
      
          res.send({
            message: "User logged in successfully",
            success: true,
            data: token,
          });
      
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
})

router.get('/get-user-by-id', authMiddleware, async (req,res) => {
    try {
        const user = await User.findById({_id:req.body.userId}).select('-password')
       return res.status(200).json({
        message:'current user',
        data:user,
        success:true
       })
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router