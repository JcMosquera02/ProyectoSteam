/*commit------1*/
const _escapar = (s = '') =>
    String(s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

const _etiquetas = (arr = []) =>
    arr.slice(0, 3)
        .map(g => `<span class="etiqueta">${_escapar(g)}</span>`)
        .join('');