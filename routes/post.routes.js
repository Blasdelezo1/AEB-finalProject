const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Post = require('./../models/Post.model')
const User = require('./../models/User.model')

router.post('/', (req, res, next) => {

  const { title, cover, description, owner, categories, moneyGame } = req.body

  Post
    .create({ title, cover, description, owner, responses: [], categories, moneyGame })
    .then(newPost => res.json(newPost))
    .catch(err => next(err))
})

router.get('/', (req, res, next) => {

  Post
    .find()
    .populate('responses owner')
    .sort({ createdAt: -1 })
    .then(allPosts => res.json(allPosts))
    .catch(err => next(err))
})

router.get('/:postId', (req, res, next) => {

  const { postId } = req.params

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  Post
    .findById(postId)
    .populate('responses owner')
    .then(postInfo => res.json(postInfo))
    .catch(err => next(err))
})



router.put('/add-fav', (req, res, next) => {

  const { postId, userId } = req.body

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  User
    .findByIdAndUpdate(
      userId,
      { $addToSet: { favorites: postId } },
      { new: true, runValidators: true }
    )
    .then(updatedUser => res.json(updatedUser))
    .catch(err => next(err))
})

router.put('/remove-fav', (req, res, next) => {

  const { postId, userId } = req.body

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  User
    .findByIdAndUpdate(
      userId,
      { $pull: { favorites: postId } },
      { new: true, runValidators: true }
    )
    .then(updatedUser => res.json(updatedUser))
    .catch(err => next(err))

})

router.put('/:postId', (req, res, next) => {

  const { postId } = req.params
  const { title, cover, description, categories, moneyGame } = req.body

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  Post
    .findByIdAndUpdate(
      postId,
      { title, cover, description, categories, moneyGame },
      { new: true, runValidators: true }
    )
    .then(updatedPost => res.json(updatedPost))
    .catch(err => next(err))
})




router.delete('/:postId', (req, res, next) => {

  const { postId } = req.params

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  Post
    .findByIdAndDelete(postId)
    .then(() => res.sendStatus(204))
    .catch(err => next(err))
})




module.exports = router
