const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

app.post('/gerar', async (req, res) => {
  try {
    const { produto, estilo } = req.body;
    const modelo = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const textoEstilo = estilo || 'UGC';
    const prompt = 'Crie um roteiro de vídeo curto no estilo ' + textoEstilo + ' sobre: ' + produto + '. Fale como uma amiga, bem natural.';
    const resultado = await modelo.generateContent(prompt);
    res.json({ sucesso: true, roteiro: resultado.response.text() });
  } catch (erro) {
    res.json({ sucesso: false, erro: erro.message });
  }
});

app.listen(3000, () => console.log('✅ Servidor rodando!'));
