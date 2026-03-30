ProyectoSteam
Participantes:
-Miguel angel Armero Muñoz
-Juan Jose Guarumo alonso
-Julian Camilo Mosquera


Descripcion:
ProyectoSteam es una aplicación interactiva diseñada para la búsqueda y gestión de información sobre series, consumiendo datos en tiempo real a través del ecosistema de TVMaze

Funciones por Script — ProyectoSteam:

Descripcion de cada funcion en todos los archivos JavaScript

main.js

Punto de entrada de la aplicacion. Solo importa e inicia.

App.iniciar()
Arranca toda la logica de la pagina principal al cargar.

app.js

Orquesta la logica completa de index.html. Conecta todos los modulos.

$
Atajo para obtener un elemento del DOM por su id.

iniciar()
Inicializa referencias DOM, eventos y carga las series desde la API.

_renderizar()
Actualiza la cuadricula, paginacion y categorias con el estado actual.

_cargar()
Obtiene las series desde TVMaze y las carga en el estado inicial.

show-main.js

Maneja toda la logica de la pagina de detalle de una serie.

iniciar()
Lee el id de la URL, carga la serie y renderiza el detalle completo.

favorites-main.js

Maneja la logica de la pagina de favoritos guardados por el usuario.

iniciar()
Configura referencias DOM, hamburguesa y renderiza la lista de favoritos.

_ordenar(favs)
Ordena los favoritos por fecha agregada, nombre o calificacion.

_renderizar()
Filtra y muestra los favoritos visibles segun busqueda y orden activo.

ui.js

Unico modulo que escribe en el DOM. Recibe datos y genera HTML.

_escapar(s)
Sanitiza texto reemplazando caracteres especiales para prevenir XSS.

_etiquetas(arr)
Genera hasta tres spans con clase etiqueta para mostrar generos.

mostrarEsqueleto(areaEl, cantidad)
Inyecta N tarjetas con animacion shimmer mientras cargan los datos.

renderizarCuadricula(series, areaEl, esFavoritoFn)
Genera la lista de tarjetas con imagen, titulo, generos y acciones.

renderizarPaginacion(actual, total, contenedorEl, btnPrimera, btnAnterior, btnSiguiente, btnUltima)
Dibuja los numeros de pagina centrados y controla los botones de navegacion.

renderizarCategorias(categorias, activa, selectEl)
Llena el select con las categorias disponibles marcando la activa.

renderizarHistorial(historial, listaEl, contenedorEl)
Muestra u oculta las busquedas recientes como etiquetas clicables.

mostrarVacio(el, mostrar)
Alterna el atributo hidden de un elemento para mostrar estado vacio.

actualizarContador(n, el)
Actualiza el texto del contador con el numero de resultados encontrados.

renderizarFavoritos(favoritos, el)
Genera la lista de items favoritos con miniatura, titulo y botones.

actualizarContadorFavoritos(n, contadorEl, btnEliminar)
Actualiza el contador y muestra u oculta el boton eliminar todos.

mostrarEsqueletoDetalle(areaEl)
Inyecta el skeleton de carga antes de obtener el detalle de la serie.

renderizarDetalle(serie, areaEl, migaNombreEl, esFav)
Renderiza el bloque completo de detalle con poster, datos y acciones.

renderizarErrorDetalle(areaEl)
Muestra un mensaje de error cuando la serie no se puede cargar.

state.js

Gestiona el estado en memoria de la aplicacion usando un IIFE privado.

obtener()
Retorna una copia inmutable del estado actual de la aplicacion.

establecer(patch)
Actualiza parcialmente el estado combinando el parche con el actual.

reiniciarPagina()
Resetea la pagina actual a 1 al cambiar filtros o busqueda.

obtenerFiltradas()
Filtra las series por categoria activa y texto de busqueda simultaneamente.

totalPaginas()
Calcula el numero total de paginas segun los resultados filtrados.

itemsPagina()
Retorna solo las series correspondientes a la pagina actual.

service.js

Centraliza todas las peticiones fetch a la API publica de TVMaze.

_obtener(url)
Funcion privada que ejecuta fetch y lanza error si la respuesta falla.

obtenerSeries(pagina)
Trae la lista general de series paginada desde el endpoint shows.

buscarSeries(q)
Busca series por nombre usando el endpoint de busqueda de TVMaze.

obtenerSeriePorId(id)
Obtiene los datos completos de una serie especifica por su id.

storage.js

Lee y escribe datos en localStorage usando claves definidas como constantes.

leer(k, d)
Lee y parsea un valor de localStorage retornando el fallback si falla.

guardar(k, v)
Serializa y guarda un valor en localStorage de forma segura.

obtenerFavoritos()
Retorna el arreglo completo de series guardadas como favoritas.

esFavorito(id)
Verifica si una serie con ese id ya esta en la lista de favoritos.

agregarFavorito(s)
Agrega una serie a favoritos evitando duplicados y guardando timestamp.

eliminarFavorito(id)
Elimina de favoritos la serie que coincida con el id recibido.

limpiarFavoritos()
Borra completamente la lista de favoritos guardada en localStorage.

obtenerHistorial()
Retorna el arreglo de busquedas recientes guardadas por el usuario.

agregarAlHistorial(q)
Agrega una busqueda al historial deduplicando y limitando a 8 entradas.

guardarPorPagina(n)
Persiste en localStorage la preferencia de elementos por pagina.

obtenerPorPagina(d)
Lee la preferencia de elementos por pagina con valor por defecto 10.

persistance.js

Aplica reglas de negocio sobre el almacenamiento usando storage como base.

alternarFavorito(serie)
Agrega o elimina un favorito segun su estado actual y retorna el resultado.

registrarBusqueda(q)
Guarda la busqueda en el historial y retorna el historial actualizado.

tema.js

Gestiona el modo oscuro y modo claro de la aplicacion.

CLAVE
Constante que define la clave usada en localStorage para guardar el tema seleccionado.

aplicarTema(oscuro)
Aplica el tema claro u oscuro a toda la aplicacion.
Cambia el atributo data-tema del documento.
Actualiza el icono del boton de tema.
Guarda la preferencia en localStorage.

iniciarTema()
Carga el tema guardado en localStorage al iniciar la pagina.
Aplica el tema correspondiente.
Agrega el evento click al boton de cambio de tema.
Alterna entre modo claro y oscuro cuando el usuario presiona el boton.

export iniciarTema
Permite importar la funcion iniciarTema en otros archivos como main.js o app.js para inicializar el tema al cargar la aplicacion.