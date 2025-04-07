const Doacao = require("../models/Doacao");

module.exports = {
  buscarPorId: async (req, res) => {
    try {
      const doacao = await Doacao.findById(req.params.id).populate('morador');
      if (!doacao) {
        return res.status(404).json({ message: "Doação não encontrada" });
      }
      res.status(200).json(doacao);
    } catch (error) {
      console.error("Erro ao buscar doação por ID:", error);
      res.status(500).json({ message: "Erro ao buscar doação", error: error.message });
    }
  },
  async criar(req, res) {
    try {
      console.log("REQ.BODY:", req.body);
      const doacao = await Doacao.create(req.body);
      return res.status(201).json(doacao);
    } catch (error) {
      console.error("ERRO:", error);
      return res.status(500).json({ error: "Erro ao criar doacao." });
    }
  },

  async listar(req, res) {
    try {
      const doacao = await Doacao.find().populate("morador");
      return res.json(doacao);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao listar doacoes." });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const doacaoAtualizada = await Doacao.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
      });
  
      if (!doacaoAtualizada) {
        return res.status(404).json({ error: "Doação não encontrada." });
      }
  
      return res.json(doacaoAtualizada);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao atualizar doação." });
    }
  },
  
  async deletar(req, res) {
    try {
      const { id } = req.params;
      const doacao = await Doacao.findByIdAndDelete(id);
  
      if (!doacao) {
        return res.status(404).json({ error: "Doação não encontrada." });
      }
  
      return res.json({ mensagem: "Doação deletada com sucesso." });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao deletar doação." });
    }
  }
  
};

