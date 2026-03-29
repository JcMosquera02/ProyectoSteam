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