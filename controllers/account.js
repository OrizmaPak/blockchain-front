const Job = require("../models/account");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const StellarSdk = require("stellar-sdk");
const jwt = require("jsonwebtoken");

const getBal = async (req, res) => {
  const server = new StellarSdk.Server(process.env.STELLAR_URL);

  const authorization = req.header("Authorization").split(" ")[1];
  const pkey = jwt.verify(authorization, process.env.JWT_SECRET);
  const publicKey = pkey.pkey;
  server
    .loadAccount(publicKey)
    .then((account) => {
      // Log the account ID
      console.log("Account ID: " + account.id);

      // Iterate over the balances array
      let balances = [];
      for (let balance of account.balances) {
        // Log the balance of each asset
        balances.push({
          balance: balance.balance,
          asset_code: balance.asset_code,
          asset_issuer: balance.asset_issuer,
        });
      }

      res.status(StatusCodes.OK).json({ address: account.id, balances });
    })
    .catch((error) => {
      res
        .status(StatusCodes.EXPECTATION_FAILED)
        .json({
          accountbalance: 0,
          accountassetcode: "Nill",
          accountissuer: "Nill",
          message:
            "This account has not not been activated. Fund Account to activate.",
        });
    });
};

const fundAcc = async (req, res) => {
  const server = new StellarSdk.Server(process.env.STELLAR_URL);

  const authorization = req.header("Authorization").split(" ")[1];
  const pkey = jwt.verify(authorization, process.env.JWT_SECRET);
  const publicKey = pkey.pkey;

  server
    .loadAccount(publicKey)
    .then((account) => {
      // Account already exists, handle it accordingly
      console.log("Account already exists: " + account.id);
      res
        .status(StatusCodes.OK)
        .json({
          message: "Account already exists and has been funded before.",
        });
    })
    .catch((error) => {
      // Account doesn't exist, proceed with creating it
      server
        .friendbot(publicKey)
        .call()
        .then((response) => {
          // Log the response
          console.log("Response: " + JSON.stringify(response));

          // Load the account details using the server.loadAccount method
          return server.loadAccount(publicKey);
        })
        .then((account) => {
          // Log the account balance
          console.log("Account balance: " + JSON.stringify(account.balances));
          res
            .status(StatusCodes.OK)
            .json({ message: "Account created successfully" });
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
          res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "Error creating account" });
        });
    });
};

const transfer = async (req, res) => {
  try {
    const server = new StellarSdk.Server(process.env.STELLAR_URL);
    const authorization = req.header("Authorization").split(" ")[1];
    const token = jwt.verify(authorization, process.env.JWT_SECRET);
    const destinationPublicKey = req.body.address;
    const amount = req.body.amount;
    const sourceSecretKey = token.skey;
    var receiverPublicKey = req.body.address;
    var sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecretKey);
    var destinationId = receiverPublicKey;
    var transaction;
    server
      .loadAccount(destinationId)
      .catch(function (error) {
        if (error instanceof StellarSdk.NotFoundError) {
          throw new Error("The destination account does not exist!");
        } else return error;
      })
      .then(function () {
        return server.loadAccount(sourceKeys.publicKey());
      })
      .then(function (sourceAccount) {
        transaction = new StellarSdk.TransactionBuilder(sourceAccount, {
          fee: StellarSdk.BASE_FEE,
          networkPassphrase: StellarSdk.Networks.TESTNET,
        })
          .addOperation(
            StellarSdk.Operation.payment({
              destination: destinationId,
              asset: StellarSdk.Asset.native(),
              amount: amount,
            })
          )
          .addMemo(StellarSdk.Memo.text("Test Transaction"))
          .setTimeout(180)
          .build();
        transaction.sign(sourceKeys);
        return server.submitTransaction(transaction);
      })
      .then(function (result) {
        console.log("Success! Results:", result);
        res
          .status(StatusCodes.OK)
          .json({
            message: "Transaction successful",
            description: `Payment of ${amount} was successfully sent to ${req.body.address}`,
          });
      })
      .catch(function (error) {
        console.error("Something went wrong!", error);
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: "Error processing transaction" });
      });
  } catch (error) {
    console.error("Something went wrong!", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error processing transaction" });
  }
};

const transferhistories = async (req, res) => {
  const server = new StellarSdk.Server(process.env.STELLAR_URL);

  const authorization = req.header("Authorization").split(" ")[1];
  const token = jwt.verify(authorization, process.env.JWT_SECRET);
  const accountId = token.pkey;
  let page1;
  server
    .transactions()
    .forAccount(accountId)
    .call()
    .then(function (page) {
      console.log("Page 1: ");
      console.log(page.records);
      page1 = page.records;
      return page.next();
    })
    .then(function (page) {
      console.log("Page 2: ");
      console.log(page.records);
      res
        .status(StatusCodes.OK)
        .json({ transactions: { p1: page1, p2: page.records } });
    })
    .catch(function (err) {
      console.log(err);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Error retrieving transaction history" });
    });
};

const transferevents = async (req, res) => {
  const server = new StellarSdk.Server(process.env.STELLAR_URL);

  const authorization = req.header("Authorization").split(" ")[1];
  const token = jwt.verify(authorization, process.env.JWT_SECRET);
  const es = server.payments()
    .cursor('now')
    .stream({
      onmessage: function (message) {
        console.log(message);
        res.status(StatusCodes.OK).json({ message: "Received payment event", data: message });
      }
    })
};

module.exports = {
  getBal,
  fundAcc,
  transfer,
  transferhistories,
  transferevents, 
};
