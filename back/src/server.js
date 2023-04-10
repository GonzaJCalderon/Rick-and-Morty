require("dotenv").config();
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const {conn} = require('./DB_connection');

conn.sync({force:true}).then(()=>{
  server.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`);
  });
})

const PORT = process.env.PORT || 3001;

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use("/", router);


