const router = require("express").Router()

const uploaderMidleware = require('../middleware/uploader.midleware')

router.post('/image', uploaderMidleware.single('imageData'), (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error cargando el archivo' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})


module.exports = router
