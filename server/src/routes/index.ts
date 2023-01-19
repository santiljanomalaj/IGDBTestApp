const { Router } = require('express')
const transactController = require('../controller');

const router = Router();

router.post('/deposit', transactController.deposit);
router.get('/getall', transactController.getAll);

module.exports = router;