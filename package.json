const express = require('express'); const cors = require('cors'); const { GoogleGenerativeAI } = require('@google/generative-ai');
const app = express(); app.use(cors()); app.use(express.json());
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
app.post('/gerar', async (req, res) => { try { const modelo = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }); const prompt = Crie um roteiro curto sobre: ${req.body.produto}; const resultado = await modelo.generateContent(prompt); res.json({ sucesso: true, roteiro: resultado.response.text() }); } catch (erro) { res.json({ sucesso: false, erro: erro.message }); } });
app.listen(3000, () => console.log('✅ Rodando!'));
