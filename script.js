document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateButtonText(savedTheme);
    } else {
        updateButtonText('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateButtonText(newTheme);
    });

    function updateButtonText(theme) {
        if (theme === 'light') {
            themeToggleBtn.textContent = '🌙 Tema Escuro';
        } else {
            themeToggleBtn.textContent = '☀️ Tema Claro';
        }
    }
});
