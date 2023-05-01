fetch('http://localhost:3000/filmes?_expand=produtora')
    .then(req => req.json())
    .then((data) => mostraFilmes(data))



function mostraFilmes(filmes) {

    const listaFilmes = filmes.map((filme => `
    <h2>${filme.titulo}</h2>
    <img src= ${filme.imagem}>
    <h4>Roteiro: ${filme.roteiro}</h4>
    <h4>Produtora: ${filme.produtora.nome}</h4>`));
    const div = document.getElementById('ListaFilmes').innerHTML = listaFilmes;
}



