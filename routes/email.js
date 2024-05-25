const express = require ("express")
const app = express()

const {sendEmails} = require('../controllers/email')

app.post("/send", sendEmails)

module.exports = app