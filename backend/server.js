require('dotenv').config(); 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const routes = require("./src/routes"); 

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.error("Erro ao conectar ao MongoDB:", err));
  console.log("URI:", process.env.MONGO_URI);


app.use(routes); 

app.listen(3333, () => {
  console.log("Servidor rodando em http://localhost:3333");
});
