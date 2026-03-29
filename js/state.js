const Estado = (() => {
  let _s = {
    series: [],
    paginaActual: 1,
    porPagina: 20,
    categoriaActiva: 'all',
    textoBusqueda: ''
  }
  const obtener = () => ({ ..._s });
  const establecer = (patch) => { _s = { ..._s, ...patch }; };

  const reiniciarPagina = () => { _s = { ..._s, paginaActual: 1 }; };

})();
