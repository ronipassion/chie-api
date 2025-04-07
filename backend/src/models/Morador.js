const mongoose = require("mongoose");

const MoradorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  apelido: String,
  contato: String,
  endereco: {
    rua: String,
    numero: Number,
    complemento: String,
    bairro: String,
  },
  criadoEm: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Morador", MoradorSchema);

