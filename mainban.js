
  // Tab to edit
// script.js
const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('results');

// Assumindo que os dados já foram carregados em uma variável chamada 'bandas'
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm) {
        // Se o termo de pesquisa não está vazio, filtra e exibe os resultados
        resultsList.innerHTML = '';

        bandas.forEach(banda => {
    if (
      banda.nome.toLowerCase().includes(searchTerm) 
    ) {
        // Criando os elementos HTML
    const div = document.createElement('div');
    div.id = 'banda';

    const h2 = document.createElement('h2');
    h2.textContent = banda.nome;

    const p = document.createElement('p');
    p.id = 'descricoes-bandas';
    p.textContent = banda.descricao;
    
    const button = document.createElement('button');
    button.textContent = 'Ir para a página do artista';
    button.onclick = () => {
    window.location.href = banda.url;
};


    // Adicionando os elementos ao div
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(button);

    // Adicionando o div à lista de resultados
    resultsList.appendChild(div);

    };

        });
    } else {
        // Se o termo de pesquisa está vazio, limpa a lista
        resultsList.innerHTML = '';
      }  })
      
// Verifica se o alerta já foi exibido
if (localStorage.getItem('alertaExibido') === null) {
  // Exibe o alerta
  alert("Obs: devido ao projeto ser pequeno e apenas para aprendizado, conta com poucas bandas e artistas. Digite um espaço para ver quais bandas e artistas o site possui.");

  // Define o valor no localStorage para indicar que o alerta foi exibido
  localStorage.setItem('alertaExibido', 'true');
};
