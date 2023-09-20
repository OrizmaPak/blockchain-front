const mongoose = require('mongoose')

const AccountBalSchema = new mongoose.Schema(
  {
    accountbalance: {
      type: String,
      required: [true, 'Account Balance could not be retrieved'],
      maxlength: 50,
      default: 0,
    },
    accountassetcode: {
      type: String,
      maxlength: 100,
      default: 'Nill',
    },
    accountassetissuer: {
      type: String,
      default: 'Nill',
    }
  }
)

module.exports = mongoose.model('AccountBal', AccountBalSchema)
