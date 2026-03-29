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

    /*commit------3*/
    const _renderizar = () => {
        const items = Estado.itemsPagina();
        const filtradas = Estado.obtenerFiltradas();
        const { paginaActual, categoriaActiva, series } = Estado.obtener();
        const categorias = [...new Set(
            series.flatMap(s => s.genres || [])
        )].sort();

        UI.renderizarCuadricula(items, areaEl, Persistencia.esFavorito);
        UI.mostrarVacio(sinResultados, items.length === 0);
        UI.actualizarContador(filtradas.length, contadorEl);
        UI.renderizarPaginacion(
            paginaActual, Estado.totalPaginas(),
            numerosEl, btnPrimera, btnAnterior, btnSiguiente, btnUltima
        );
        UI.renderizarCategorias(categorias, categoriaActiva, categoriaEl);
    };

    /*commit------4*/
    const _cargar = async () => {
        UI.mostrarEsqueleto(areaEl, 8);
        try {
            const series = await Servicio.obtenerSeries(0);
            Estado.establecer({ series, textoBusqueda: '', categoriaActiva: 'all' });
            Estado.reiniciarPagina();
            _renderizar();
        } catch (err) {
            console.error('[app]', err);
            areaEl.innerHTML = '';
            UI.mostrarVacio(sinResultados, true);
        }
    };

    /*commit------5*/
    campoBusq?.addEventListener('input', () => {
        const q = campoBusq.value;
        btnLimpiar.hidden = !q;
        Estado.establecer({ textoBusqueda: q });
        Estado.reiniciarPagina();
        if (q.trim().length >= 2) {
            Persistencia.registrarBusqueda(q.trim());
            UI.renderizarHistorial(
                Persistencia.obtenerHistorial(), histLista, histContenedor
            );
        }
        _renderizar();
    });

    btnLimpiar?.addEventListener('click', () => {
        campoBusq.value = '';
        btnLimpiar.hidden = true;
        Estado.establecer({ textoBusqueda: '' });
        Estado.reiniciarPagina();
        _renderizar();
    });

    /*commit------6*/
    categoriaEl?.addEventListener('change', () => {
        Estado.establecer({ categoriaActiva: categoriaEl.value });
        Estado.reiniciarPagina();
        _renderizar();
    });

    porPaginaEl?.addEventListener('change', () => {
        const n = parseInt(porPaginaEl.value);
        Estado.establecer({ porPagina: n });
        Estado.reiniciarPagina();
        Persistencia.guardarPorPagina(n);
        _renderizar();
    });