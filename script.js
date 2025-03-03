// Carrossel de Referências
document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel');
    const itens = document.querySelectorAll('.carrossel-item');
    const btnAnterior = document.querySelector('.carrossel-btn.anterior');
    const btnProximo = document.querySelector('.carrossel-btn.proximo');
    let index = 0;

    function mostrarItem(indice) {
        // Oculta todos os itens
        itens.forEach(item => {
            item.style.display = 'none';
        });

        // Exibe o item atual
        itens[indice].style.display = 'flex';
    }

    btnAnterior.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : itens.length - 1;
        mostrarItem(index);
    });

    btnProximo.addEventListener('click', () => {
        index = (index < itens.length - 1) ? index + 1 : 0;
        mostrarItem(index);
    });

    // Inicializa o carrossel
    mostrarItem(index);
});