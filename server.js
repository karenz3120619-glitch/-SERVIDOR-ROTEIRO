if (!produto) {
  return res.status(400).json({ erro: 'Digite o nome do produto!' });
}

const modelo = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
const prompt = `Crie um roteiro de vídeo curto no estilo ${estilo} sobre: ${produto}. 
Fale como uma amiga, natural e direto. Seja curto e objetivo.`;

const resultado = await modelo.generateContent(prompt);
const resposta = await resultado.response;
const texto = resposta.text();

res.json({
  sucesso: true,
  roteiro: texto,
  estilo: estilo
});
