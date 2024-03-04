const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Response = require('./../models/Response.model')
const Post = require('./../models/Post.model')


router.post('/', (req, res, next) => {

    const { comment, owner, post } = req.body

    Response
        .create({ comment, owner, post })
        .then(newResponse => {
            return Post
                .findByIdAndUpdate(
                    post,
                    { $push: { responses: newResponse._id } },
                    { new: true, runValidators: true }
                )
        })
        .then(updatedPost => {
            res.json(updatedPost)
        })
        .catch(err => next(err))
})

router.get('/', (req, res, next) => {

    Response
        .find()
        .then(allComents => res.json(allComents))
        .catch(err => next(err))
})

router.get('/:responseId', (req, res, next) => {

    const { responseId } = req.params

    if (!mongoose.Types.ObjectId.isValid(responseId)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }

    Response
        .findById(responseId)
        .then(responseInfo => res.json(responseInfo))
        .catch(err => next(err))

})

router.put('/:responseId', (req, res, next) => {

    const { responseId } = req.params
    const { comment } = req.body

    if (!mongoose.Types.ObjectId.isValid(responseId)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }

    Response
        .findByIdAndUpdate(
            responseId,
            { comment },
            { new: true, runValidators: true }
        )
        .then(updatedResponse => res.json(updatedResponse))
        .catch(err => next(err))
})

router.delete('/:responseId', (req, res, next) => {

    const { responseId } = req.params

    if (!mongoose.Types.ObjectId.isValid(responseId)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }

    Response
        .findByIdAndDelete(responseId)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})

module.exports = router