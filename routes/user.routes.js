const express = require("express")
const router = express.Router()
const User = require('./../models/User.model')

router.get('/:userId', (req, res, next) => {

  const { userId } = req.params

  User
    .findById(userId)
    .then(user => res.json(user))
    .catch(err => next(err))
})


router.get('/:userId/favs', (req, res, next) => {

  const { userId } = req.params

  User
    .findById(userId)
    .select('favorites')
    .then(userFavs => res.json(userFavs))
    .catch(err => next(err))
})


router.get('/:userId/all-favs', (req, res, next) => {

  const { userId } = req.params

  User
    .findById(userId)
    .populate('favorites')
    .select('favorites')
    .then((allFavs) => res.json(allFavs))
    .catch(err => next(err))
})


module.exports = router
