const express = require('express')
const router = express.Router()
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/authMiddleware');
const Exam = require('../models/examModel')

router.post('/add-exams', authMiddleware, async (req,res) => {
    try {
        req.body.questions = []
        const exam = new Exam(req.body)
        await exam.save()
        res.send({
            message:'Exams created',
            exam,
            success:true
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error:error.message
        })
    }
})

router.get('/list-exams', authMiddleware, async (req,res) => {
    try {
       const exam = await Exam.find({})
        return res.send({
            message:'Exams Fetched Successfully',
            exam,
            success:true
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message,
            success:false
        })
    }
})

module.exports = router