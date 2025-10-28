const formPost = document.querySelector('#form-post');
const titulo = document.querySelector('#titulo');
const conteudo = document.querySelector('#conteudo');
const renderizadorTitulo = document.querySelector('#renderizador-titulo');
const renderizadorConteudo = document.querySelector('#renderizador-conteudo');

formPost.addEventListener('submit', function(e) {
    e.preventDefault();

    const data = {
        title: titulo.value,
        body: conteudo.value,
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
    .then(response => response.json())
    .then(data => {
        // Renderização do post publicado
        renderizadorTitulo.innerHTML = data.title;
        renderizadorConteudo.innerHTML = data.body;

        // Limpa o formulário após enviar
        titulo.value = '';
        conteudo.value = '';
    })
    .catch(error => console.error('Erro ao publicar o post:', error));
});
