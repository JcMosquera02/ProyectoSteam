import Almacenamiento from './storage.js';

const alternarFavorito = (serie) => {
    const era = Almacenamiento.esFavorito(serie.id);
    era
        ? Almacenamiento.eliminarFavorito(serie.id)
        : Almacenamiento.agregarFavorito(serie);
    return { agregado: !era };
};

/* -----------------*/

const registrarBusqueda = (q) => {
    Almacenamiento.agregarAlHistorial(q);
    return Almacenamiento.obtenerHistorial();
};