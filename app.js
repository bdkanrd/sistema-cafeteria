const express = require('express');
const fs = require('fs');


const app = express();
const port = 3000;


app.use(express.json());
app.use(express.static('public'));  


//FUNCAO PARA LEITURA DO JSON
function lerDados(){
    const dadosBrutos = fs.readFileSync('dados.json');
    const dados = JSON.parse(dadosBrutos);
    //return console.log(dados)
    return dados;
}



//ADICIONAR PRODUTO NOVO
function adicionarNovoProduto(novoProduto){
  const produtos = lerDados();
  produtos.push(novoProduto);
  fs.writeFileSync('dados.json', JSON.stringify(produtos, null, 2));
  console.log('Produto cadastrado com sucesso!')
}



app.post('/salvar', (req, res) => {
    
    const imcData = req.body;  

    adicionarNovoProduto(imcData);
    res.send('Dados salvos com sucesso!');
});




// Inicia o servidor na porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
