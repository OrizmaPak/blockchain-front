const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')
var StellarSdk = require('stellar-sdk');


const register = async (req, res) => {
  var keypair = await StellarSdk.Keypair.random();
  let publickey = keypair.publicKey(); 
  let secretkey = keypair.secret();
  const user = await User.create({ ...req.body, publickey, secretkey }) 
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ user: { email: user.email, pKey: user.publickey, skey: user.secretkey }, token })
}

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  // compare password
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { email: user.email, pKey: user.publickey, skey: user.secretkey }, token })
}

module.exports = {
  register,
  login,
}
