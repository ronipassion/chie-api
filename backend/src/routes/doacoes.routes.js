const express = require("express");
const router = express.Router();
const DoacaoController = require("../controllers/DoacaoController");


router.post("/", DoacaoController.criar);
router.get("/", DoacaoController.listar);
router.get("/:id", DoacaoController.buscarPorId);
router.put("/:id", DoacaoController.atualizar);
router.delete("/:id", DoacaoController.deletar);


module.exports = router;
