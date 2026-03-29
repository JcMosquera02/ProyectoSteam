/*commit------5*/
/** favorites-main.js — lógica de favorites.html */
import Persistencia from './persistance.js';
import UI from './ui.js';

const $ = id => document.getElementById(id);

const iniciar = () => {
    const listaEl = $('lista-favoritos');
    const listaVaciaEl = $('lista-vacia');
    const sinCoincidencias = $('sin-coincidencias');
    const contadorEl = $('contador-favoritos');
    const btnEliminarTodo = $('btn-eliminar-todo');
    const buscarEl = $('buscar-favoritos');
    const botonesOrden = document.querySelectorAll('.btn-orden');
    const botonMenu = $('boton-menu');
    const menuNav = $('menu-nav');

    botonMenu?.addEventListener('click', () => {
        const abierto = menuNav.classList.toggle('abierto');
        botonMenu.setAttribute('aria-expanded', abierto);
    });
    document.addEventListener('click', e => {
        if (!botonMenu?.contains(e.target) && !menuNav?.contains(e.target)) {
            menuNav?.classList.remove('abierto');
            botonMenu?.setAttribute('aria-expanded', 'false');
        }
    });