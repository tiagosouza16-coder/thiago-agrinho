document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SISTEMA DE PAGINAÇÃO DINÂMICA (SPA)
    const links = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove a classe ativa de todos os links e páginas
            links.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));

            // Adiciona classe ativa ao link clicado
            link.classList.add('active');

            // Exibe a página alvo baseado no atributo 'data-target'
            const targetId = link.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');

            // Se o menu mobile estiver aberto ao clicar, fecha ele
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }

            // Rola a tela para o topo suavemente
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // 2. MENU MOBILE RESPONSIVO
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // 3. ENVIO E VALIDAÇÃO DE FORMULÁRIO DE CONTATO
    const form = document.getElementById('agroForm');
    const feedback = document.getElementById('formFeedback');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o recarregamento da página

            // Coleta os valores digitados (podem ser enviados para uma API no futuro)
            const name = document.getElementById('name').value;

            // Simulação de envio com sucesso
            feedback.innerHTML = `<strong>Obrigado, ${name}!</strong> Sua mensagem sobre o Agro Sustentável foi enviada com sucesso.`;
            feedback.className = "alert-success"; // Exibe a caixa verde
            
            // Reseta o formulário
            form.reset();

            // Desaparece com a mensagem após 5 segundos
            setTimeout(() => {
                feedback.className = "hidden";
            }, 5000);
        });
    }
});

// Função global extra para botões internos que redirecionam páginas
function navigateTo(targetPageId) {
    const targetLink = document.querySelector(`[data-target="${targetPageId}"]`);
    if (targetLink) {
        targetLink.click();
    }
}''