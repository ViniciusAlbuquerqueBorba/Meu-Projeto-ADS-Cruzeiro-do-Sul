const App = {
    // Inicia a aplicação
    init: () => {
        // Carrega a página inicial por padrão
        App.render('home');

        // Adiciona evento de clique nos links do menu
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', App.handleNavigation);
        });
    },

    // Lida com o clique no menu
    handleNavigation: (event) => {
        event.preventDefault(); // Impede o link de carregar nova página
        
        // Remove classe 'active' de todos e adiciona no clicado
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        event.target.classList.add('active');

        // Pega o destino (ex: 'cadastro') do atributo data-target
        const targetPage = event.target.getAttribute('data-target');
        App.render(targetPage);
    },

    // Troca o conteúdo do <main> (Lógica SPA)
    render: (pageName) => {
        const appContent = document.getElementById('app');
        
        // Injeta o HTML do template correspondente
        appContent.innerHTML = templates[pageName];

        // Se for a página de cadastro, ativa a validação
        if (pageName === 'cadastro') {
            Validation.init();
        }
        
        // Scroll suave para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

// Inicia tudo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', App.init);