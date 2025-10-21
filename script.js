const listaItens = document.getElementById('lista-itens');
const totalTexto = document.getElementById('total');

let itens = [];

function adicionarItem() {
  const produto = document.getElementById('produto').value.trim();
  const preco = parseFloat(document.getElementById('preco').value);

  if (!produto || preco <= 0) {
    alert('Insira um produto e um preço válidos.');
    return;
  }

  itens.push({ produto, preco });

  const div = document.createElement('div');
  div.textContent = `${produto} - R$ ${preco.toFixed(2)}`;
  listaItens.appendChild(div);

  document.getElementById('produto').value = '';
  document.getElementById('preco').value = '';
}



function calcularTotal() {

   let total = 0;
   itens.forEach(item =>{
    total += item.preco;
   });
  totalTexto.textContent = `R$ ${total.toFixed(2)}`;

   if (itens.length === 0) {
    alert('Insira um produto e um preço válidos.');
    return;
  }
}




function salvarPedido() {

      if (itens.length === 0) {
    alert('Adicione itens antes de salvar.');
    return;
  }


    let total = 0;
       itens.forEach(item =>{
        total += parseFloat(item.preco);
       });
    

  const pedido = {
    itens: itens,
    total: total.toFixed(2),
  };

  let registros =
  JSON.parse(localStorage.getItem('pedidos')) || [];
  registros.push(pedido);

  localStorage.setItem('pedidos', JSON.stringify(registros));

  alert('Pedido salvo com sucesso!');
}
