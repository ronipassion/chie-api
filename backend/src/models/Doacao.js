const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoacaoSchema = new Schema({
  tipo: {
    type: String,
    enum: ["oleo", "organico", "plastico"],
    required: true
  },
  quantidade: {
    type: Number,
    required: true
  },
  local: {
    type: String,
    required: true
  },
  morador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Morador",
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Doacao", DoacaoSchema);
