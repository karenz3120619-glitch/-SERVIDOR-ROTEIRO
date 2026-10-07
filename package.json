const prompt = `Crie um roteiro de vídeo curto no estilo ${estilo || 'UGC'} sobre: ${produto}.
Fale como uma amiga, bem natural e direto.`;

const resultado = await modelo.generateContent(prompt);
const resposta = await resultado.response;
res.json({ sucesso: true, roteiro: resposta.text() });