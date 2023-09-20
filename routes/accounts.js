const express = require('express')

const router = express.Router()
const {
  getBal, fundAcc, transfer, transferhistories, transferevents
} = require('../controllers/account')

router.route('/balance').get(getBal)
router.route('/fundaccount').get(fundAcc)
router.route('/transfer').post(transfer)
router.route('/history').get(transferhistories)
router.route('/events').get(transferevents)

module.exports = router
