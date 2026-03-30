const CLAVE = 'tema';

const aplicarTema = (oscuro) => {
    document.documentElement.setAttribute('data-tema', oscuro ? 'oscuro' : 'claro');
    const btn = document.getElementById('btn-tema');
    if (btn) btn.textContent = oscuro ? '☀️' : '🌙';
    localStorage.setItem(CLAVE, oscuro ? 'oscuro' : 'claro');
};

const iniciarTema = () => {
    const oscuro = localStorage.getItem(CLAVE) === 'oscuro';
    aplicarTema(oscuro);
    document.getElementById('btn-tema')?.addEventListener('click', () => {
        const esOscuro = document.documentElement.getAttribute('data-tema') === 'oscuro';
        aplicarTema(!esOscuro);
    });
};

export { iniciarTema };