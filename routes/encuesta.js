const {Router} = require('express')
const { puthEncuesta } = require('../controllers/encuesta')
const router = Router()

const {getEncuesta, postEncuesta, deleteEncuesta, putEncuesta, patchEncuesta } = require('../controllers/encuesta')


router.get('/', getEncuesta)
router.post('/', postEncuesta )
router.delete('/', deleteEncuesta)
router.put('/', putEncuesta)
router.patch('/', patchEncuesta)






module.exports = router