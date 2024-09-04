// Função para alternar o menu em telas pequenas
const menuToggle = document.querySelector('.menu-toggle'); // Seleciona o ícone ou botão para alternar o menu
const menuList = document.querySelector('.menu'); // Seleciona a lista de navegação

// Verifica se os elementos existem na página antes de adicionar o evento
if (menuToggle && menuList) {
    menuToggle.addEventListener('click', function() {
        // Alterna a classe 'active' no menu para mostrar/ocultar
        menuList.classList.toggle('active');

        // Atualiza o atributo de acessibilidade para indicar se o menu está expandido ou não
        const isExpanded = menuList.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });
}
