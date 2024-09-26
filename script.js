function togglePanel(panelId) {
    const panel = document.getElementById(panelId);
    
    // Добавляем/удаляем класс active для плавного открытия/закрытия
    if (panel.classList.contains('active')) {
        panel.classList.remove('active');
    } else {
        panel.classList.add('active');
    }
}

window.addEventListener('resize', function() {
    // Если нужно, установите фиксированную ширину
    document.body.style.width = '100%';
    window.scrollTo(0, 0); // Сброс позиции прокрутки
});

let lastTouchEnd = 0;

document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

document.addEventListener('gesturestart', function (event) {
    event.preventDefault(); // Запрет на масштабирование
});

