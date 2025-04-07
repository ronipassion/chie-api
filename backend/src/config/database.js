const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on("connect", () => {
    console.log("MongoDB conectado com sucesso");
});

mongoose.connection.on("error", (err) => {
    console.error("Erro na conexão com o MongoDB:", err)
});