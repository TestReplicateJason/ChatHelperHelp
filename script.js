function togglePanel(panelId) {
    const panel = document.getElementById(panelId);
    
    // Добавляем/удаляем класс active для плавного открытия/закрытия
    if (panel.classList.contains('active')) {
        panel.classList.remove('active');
    } else {
        panel.classList.add('active');
    }
}
