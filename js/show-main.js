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