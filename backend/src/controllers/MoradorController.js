const Morador = require("../models/Morador");

module.exports = {
  buscarPorId: async (req, res) => {
    try {
      const morador = await Morador.findById(req.params.id);
      if (!morador) {
        return res.status(404).json({ message: "Morador não encontrado" });
      }
      res.status(200).json(morador);
    } catch (error) {
      console.error("Erro ao buscar morador por ID:", error);
      res.status(500).json({ message: "Erro ao buscar morador", error: error.message });
    }
  },
  async criar(req, res) {
    try {
      console.log("REQ.BODY:", req.body);
      const morador = await Morador.create(req.body);
      return res.status(201).json(morador);
    } catch (error) {
      console.error("ERRO:", error);
      return res.status(500).json({ error: 'Erro ao criar morador.' });
    }
  },

  async listar(req, res) {
    try {
      const moradores = await Morador.find();
      return res.json(moradores);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao listar moradores." });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const moradorAtualizado = await Morador.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
      });
  
      if (!moradorAtualizado) {
        return res.status(404).json({ error: "Morador não encontrado." });
      }
  
      return res.json(moradorAtualizado);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao atualizar morador." });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      const morador = await Morador.findByIdAndDelete(id);
  
      if (!morador) {
        return res.status(404).json({ error: "Morador não encontrado." });
      }
  
      return res.json({ mensagem: "Morador deletado com sucesso." });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao deletar morador." });
    }
  }
  
};

