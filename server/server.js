const path = require("path")
const express = require("express")
const { Server } = require("http")

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

module.exports = server
