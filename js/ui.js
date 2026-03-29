/*commit------1*/
const _escapar = (s = '') =>
    String(s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

const _etiquetas = (arr = []) =>
    arr.slice(0, 3)
        .map(g => `<span class="etiqueta">${_escapar(g)}</span>`)
        .join('');

/*commit------2*/
const mostrarEsqueleto = (areaEl, cantidad = 8) => {
    if (!areaEl) return;
    const items = Array.from({ length: cantidad }, () => `
    <li class="tarjeta-esqueleto">
      <div class="tarjeta-esqueleto__imagen shimmer"></div>
      <div class="tarjeta-esqueleto__cuerpo">
        <div class="tarjeta-esqueleto__linea shimmer"></div>
        <div class="tarjeta-esqueleto__linea tarjeta-esqueleto__linea--corta shimmer"></div>
      </div>
    </li>`).join('');
    areaEl.innerHTML = `<ul class="cuadricula-esqueleto">${items}</ul>`;
};

/*commit------3*/
const renderizarCuadricula = (series, areaEl, esFavoritoFn) => {
    if (!areaEl) return;
    if (!series.length) { areaEl.innerHTML = ''; return; }
    areaEl.innerHTML = `<ul class="cuadricula">${series.map(s => {
        const img = s.image?.medium || s.image?.original || '';
        const calif = s.rating?.average;
        const esFav = esFavoritoFn(s.id);
        return `
      <li class="tarjeta">
        <div class="tarjeta__imagen">
          ${img
                ? `<img src="${_escapar(img)}" alt="${_escapar(s.name)}" loading="lazy" />`
                : `<div class="tarjeta__sin-imagen">Sin imagen</div>`}
        </div>
        <div class="tarjeta__cuerpo">
          <p class="tarjeta__titulo">${_escapar(s.name || 'Sin título')}</p>
          <div class="tarjeta__generos">${_etiquetas(s.genres)}</div>
          ${calif ? `<p class="tarjeta__calificacion">★ ${calif}</p>` : ''}
          <div class="tarjeta__acciones">
            <a href="../Paginas/show.html?id=${s.id}" class="btn btn--primario">Ver</a>
            <button class="btn btn--contorno" data-id-fav="${s.id}"
              aria-pressed="${esFav}">${esFav ? '♥' : '♡'}</button>
          </div>
        </div>
      </li>`;
    }).join('')}</ul>`;
};

/*commit------4*/
const renderizarCategorias = (categorias, activa, selectEl) => {
    if (!selectEl) return;
    selectEl.innerHTML =
        `<option value="all" ${activa === 'all' ? 'selected' : ''}>Todas</option>` +
        categorias.map(c =>
            `<option value="${_escapar(c)}" ${activa === c ? 'selected' : ''}>${_escapar(c)}</option>`
        ).join('');
};

/*commit------5*/
const renderizarHistorial = (historial, listaEl, contenedorEl) => {
    if (!listaEl || !contenedorEl) return;
    if (!historial.length) { contenedorEl.hidden = true; return; }
    contenedorEl.hidden = false;
    listaEl.innerHTML = historial.map(q =>
        `<li><button class="historial__etiqueta"
      data-busqueda="${_escapar(q)}">${_escapar(q)}</button></li>`
    ).join('');
};

/*commit------6*/
const mostrarVacio = (el, mostrar) => { if (el) el.hidden = !mostrar; };
const actualizarContador = (n, el) => {
    if (el) el.textContent = `${n} resultado${n !== 1 ? 's' : ''}`;
};

/*commit------1*/
const renderizarPaginacion = (
    actual, total, contenedorEl,
    btnPrimera, btnAnterior, btnSiguiente, btnUltima
) => {
    if (!contenedorEl) return;
    btnPrimera.disabled = actual <= 1;
    btnAnterior.disabled = actual <= 1;
    btnSiguiente.disabled = actual >= total;
    btnUltima.disabled = actual >= total;
    if (total <= 1) { contenedorEl.innerHTML = ''; return; }

    const VENTANA = 5;
    let inicio = Math.max(1, actual - Math.floor(VENTANA / 2));
    let fin = inicio + VENTANA - 1;
    if (fin > total) { fin = total; inicio = Math.max(1, fin - VENTANA + 1); }

    const items = [];
    if (inicio > 1) {
        items.push(`<button class="btn-pagina" data-pagina="1">1</button>`);
        if (inicio > 2) items.push(`<span class="pagina-puntos">…</span>`);
    }
    for (let n = inicio; n <= fin; n++) {
        const activo = n === actual;
        items.push(`<button class="btn-pagina ${activo ? 'activo' : ''}"
      data-pagina="${n}" ${activo ? 'disabled' : ''}
      aria-current="${activo ? 'page' : 'false'}">${n}</button>`);
    }
    if (fin < total) {
        if (fin < total - 1) items.push(`<span class="pagina-puntos">…</span>`);
        items.push(`<button class="btn-pagina" data-pagina="${total}">${total}</button>`);
    }
    contenedorEl.innerHTML = items.join('');
};