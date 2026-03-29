/*commit------1*/
import Estado from './state.js';
import Servicio from './service.js';
import Persistencia from './persistance.js';
import UI from './ui.js';

const $ = id => document.getElementById(id);

const iniciar = () => {
    const areaEl = $('area-contenido');
    const sinResultados = $('sin-resultados');
    const contadorEl = $('contador-resultados');
    const categoriaEl = $('selector-categoria');
    const porPaginaEl = $('selector-por-pagina');
    const numerosEl = $('numeros-pagina');
    const btnPrimera = $('btn-primera');
    const btnAnterior = $('btn-anterior');
    const btnSiguiente = $('btn-siguiente');
    const btnUltima = $('btn-ultima');
    const campoBusq = $('campo-busqueda');
    const btnLimpiar = $('btn-limpiar');
    const histContenedor = $('historial-contenedor');
    const histLista = $('historial-lista');
    const botonMenu = $('boton-menu');
    const menuNav = $('menu-nav');