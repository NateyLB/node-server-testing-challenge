const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const DogsRouter = require('../dogs/dogs-router.js');
const OwnersRouter = require('../owners/owners-router.js');



const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/owners', OwnersRouter);
server.use('/api/dogs', DogsRouter);


server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;