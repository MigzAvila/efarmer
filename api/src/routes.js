const express = require('express')
const router = express.Router()
const User_Data = require('./models/userTable') // includes our model

// get all user info
router.get('/efarmer', async (req, res) => {
    try {
        const userData = await User_Data.find()
        return res.status(200).json(userData)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

// get user info data
router.get('/efarmer/:id', async (req, res) => {
    try {
        const _id = req.params.id 

        const userData = await User_Data.findOne({_id})        
        if(!userData){
            return res.status(404).json({})
        }else{
            return res.status(200).json(userData)
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

// create one user info
router.post('/efarmer', async (req, res) => {

    try {
        const { Username } = req.body
        const { Question } = req.body
        const { Replies } = req.body

        const userData = await User_Data.create({
            Username,
            Question,
            Replies
        })

        return res.status(201).json(userData)
    } catch (error) {
        return res.status(500).json({"error":error})
    }

})

// update one user info
router.put('/efarmer/:id', async(req, res) => {

    try {
        const _id = req.params.id 
        const { Username, Question, Replies  } = req.body //Country, Destination, VacationInterest, NumberOfNights, Rooms, Adults, Children, CommentsOrQuestions

        let userData = await User_Data.findOne({_id})

        if(!userData){
            userData = await User_Data.create({
                Username,
                Question,
                Replies
            })    
            return res.status(201).json(userData)
        }else{
            userData.Username = Username
            userData.Question = Question
            userData.Replies = Replies
            await userData.save()
            return res.status(200).json(userData)
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }

})

// delete one user info
router.delete('/efarmer/:id', async (req, res) => {

    try {
        const _id = req.params.id 

        const userData = await User_Data.deleteOne({_id})

        if(userData.deletedCount === 0){
            return res.status(404).json()
        }else{
            return res.status(204).json()
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})



module.exports = router