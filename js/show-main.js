/*commit------1*/
/** show-main.js — lógica de show.html */
import Servicio from './service.js';
import Persistencia from './persistance.js';
import UI from './ui.js';

const $ = id => document.getElementById(id);

const iniciar = async () => {
    const areaEl = $('area-contenido');
    const migaNombre = $('miga-nombre');
    const botonMenu = $('boton-menu');
    const menuNav = $('menu-nav');

    /*commit------2*/
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