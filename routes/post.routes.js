const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Post = require('./../models/Post.model')


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
    // .select()
    // .sort()
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
    .populate('responses')
    .then(postInfo => res.json(postInfo))
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

router.get('/:postId/responses', (req, res, next) => {

  const { postId } = req.params

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  Post
    .findById(postId)
    .populate('responses')
    .select('responses')
    .then(post => {
      if (!post) {
        res.status(404).json({ message: 'Post not found' })
        return
      }
      res.json(post)
    })
    .catch(err => next(err))
})

module.exports = router
