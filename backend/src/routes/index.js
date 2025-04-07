const express = require("express");
const router = express.Router();

const moradorRoutes = require("./moradores.routes");
const doacoesRoutes = require("./doacoes.routes");

router.use("/moradores", moradorRoutes);
router.use("/doacoes", doacoesRoutes);

module.exports = router;
