// Função para alternar o menu em telas pequenas
const menuToggle = document.querySelector('nav');
menuToggle.addEventListener('click', function() {
    const menuList = document.querySelector('.menu');
    menuList.classList.toggle('active');
});

