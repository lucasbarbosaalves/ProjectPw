import express from 'express'
const app = express();
app.use(express.json());

// Exemplo de dados para o modelo de negócio
let dados = [
  { id: 1, nome: 'Airmax 97', cor: 'preto', tamanho: '42', preco: 'R$829,99' },
  { id: 2, nome: 'Adidas', cor: 'preto', tamanho: '42', preco: 'R$829,99' },
  { id: 3, nome: 'Dunk', cor: 'preto', tamanho: '42', preco: 'R$829,99' },
  { id: 4, nome: 'Jordan', cor: 'preto', tamanho: '42', preco: 'R$829,99' },
  { id: 5, nome: 'Yeezzy', cor: 'preto', tamanho: '42', preco: 'R$829,99' },
  { id: 6, nome: 'AirForce', cor: 'preto', tamanho: '42', preco: 'R$829,99' },
  { id: 7, nome: 'Jordan', cor: 'preto', tamanho: '42', preco: 'R$829,99' },
  { id: 8, nome: 'Airmax 97', cor: 'preto', tamanho: '42', preco: 'R$829,99' },
  { id: 9, nome: 'Airmax 97', cor: 'preto', tamanho: '42', preco: 'R$829,99' },
  { id: 10, nome: 'Airmax 97', cor: 'preto', tamanho: '42', preco: 'R$829,99' }
];

// Rota para obter todos os dados
app.get('/api/produto', (req, res) => {
  res.json(dados);
});

// Rota para obter um dado específico
app.get('/api/produto/:id', (req, res) => {
  const dado = dados.find(d => d.id === parseInt(req.params.id));
  if (dado) {
    res.json(dado);
  } else {
    res.status(404).json({ mensagem: 'Dado não encontrado' });
  }
});

// Rota para adicionar um novo dado
app.post('/api/produto', (req, res) => {
  const novoDado = req.body;
  dados.push(novoDado);
  res.status(201).json(novoDado);
});

// Rota para atualizar um dado existente
app.put('/api/produto/:id', (req, res) => {
  const dado = dados.find(d => d.id === parseInt(req.params.id));
  if (dado) {
    dado.nome = req.body.nome;
    res.json(dado);
  } else {
    res.status(404).json({ mensagem: 'Dado não encontrado' });
  }
});

// Rota para excluir um dado existente
app.delete('/api/produto/:id', (req, res) => {
  const index = dados.findIndex(d => d.id === parseInt(req.params.id));
  if (index !== -1) {
    const dadoRemovido = dados.splice(index, 1)[0];
    res.json(dadoRemovido);
  } else {
    res.status(404).json({ mensagem: 'Dado não encontrado' });
  }
});

// Iniciar o servidor
app.listen(3003, () => {
  console.log('API está rodando na porta 3003');
});