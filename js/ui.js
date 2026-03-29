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
