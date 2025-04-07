const express = require("express");
const MoradorController = require("../controllers/MoradorController");

const router = express.Router();

router.post("/", MoradorController.criar);
router.get("/", MoradorController.listar);
router.get("/:id", MoradorController.buscarPorId);
router.put("/:id", MoradorController.atualizar);
router.delete("/:id", MoradorController.deletar);


module.exports = router;