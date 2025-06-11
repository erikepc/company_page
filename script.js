// Funcionalidade para o pop-up de memorando e animação do botão Avisos
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const avisosLink = document.getElementById('avisos-link');
    const memorandoPopup = document.getElementById('memorando-popup');
    const closePopupBtn = document.getElementById('close-popup');
    const notificationBadge = document.getElementById('notification');
    
    // Sempre adicionar a classe de animação piscante ao botão Avisos ao carregar a página
    avisosLink.classList.add('blinking');
    
    // Verificar se há notificação no localStorage
    const notificationSeen = localStorage.getItem('notificationSeen');
    
    // Se a notificação já foi vista, esconder o badge, mas manter a animação
    if (notificationSeen === 'true') {
        notificationBadge.style.display = 'none';
    }
    
    // Abrir o pop-up quando clicar no link de avisos
    avisosLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir navegação
        memorandoPopup.style.display = 'flex';
        
        // Marcar a notificação como vista
        localStorage.setItem('notificationSeen', 'true');
        
        // Esconder o badge de notificação
        notificationBadge.style.display = 'none';
        
        // Parar a animação de piscar
        avisosLink.classList.remove('blinking');
    });
    
    // Fechar o pop-up quando clicar no botão de fechar
    closePopupBtn.addEventListener('click', function() {
        memorandoPopup.style.display = 'none';
    });
    
    // Fechar o pop-up quando clicar fora dele
    window.addEventListener('click', function(event) {
        if (event.target === memorandoPopup) {
            memorandoPopup.style.display = 'none';
        }
    });
    
    // Simular um usuário logado
    const userName = document.getElementById('user-name');
    userName.textContent = 'João Silva'; // Nome do usuário simulado
});
