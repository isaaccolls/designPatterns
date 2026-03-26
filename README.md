# Patrones de diseño en JavaScript y TypeScript

Ejemplos ejecutables. Cada carpeta numerada contiene código en `js/` y/o `ts/` y una **guía breve** en `README.md`.

**Índice ampliado (propósito, cuándo usarlo y enlaces cruzados):** [docs/INDICE.md](docs/INDICE.md)

## Ejecutar ejemplos

| Entorno    | Requisitos                                           | Comando típico               |
| ---------- | ---------------------------------------------------- | ---------------------------- |
| TypeScript | `nvm use v16.16.0`, `npm i -g ts-node`               | `ts-node ruta/al/archivo.ts` |
| JavaScript | Node o navegador (p. ej. `index.html` en `00_intro`) | `node ruta/al/archivo.js`    |

El ejemplo **Criteria** incluye una app Next.js: ver [10_criteria/README.md](10_criteria/README.md) y [10_criteria/criteria-example/README.md](10_criteria/criteria-example/README.md).

## Clasificación GoF y material extra

Los patrones del _Gang of Four_ se suelen agrupar así; en este repo aparecen también temas de **domino/aplicación** y **pruebas**.

### Creación

Gestionan _cómo_ se instancian los objetos.

| Patrón                             | Carpeta                                        |
| ---------------------------------- | ---------------------------------------------- |
| Singleton                          | [01_singleton](01_singleton/README.md)         |
| Builder                            | [05_builder](05_builder/README.md)             |
| Object Mother _(fixtures de test)_ | [09_object-mother](09_object-mother/README.md) |

### Estructura

Componen clases u objetos en estructuras más grandes.

| Patrón    | Carpeta                                |
| --------- | -------------------------------------- |
| Decorator | [04_decorator](04_decorator/README.md) |
| Bridge    | [07_bridge](07_bridge/README.md)       |
| Facade    | [08_facade](08_facade/README.md)       |
| Adapter   | [11_adapter](11_adapter/README.md)     |

### Comportamiento

Distribuyen responsabilidades y comunicación entre objetos.

| Patrón   | Carpeta                              |
| -------- | ------------------------------------ |
| Strategy | [02_strategy](02_strategy/README.md) |
| Observer | [03_observer](03_observer/README.md) |
| State    | [06_state](06_state/README.md)       |

### Dominio y aplicación (complementarios al GoF)

| Tema                              | Carpeta                              |
| --------------------------------- | ------------------------------------ |
| Criteria / búsqueda con criterios | [10_criteria](10_criteria/README.md) |

### Introducción (OOP en TS)

| Contenido                              | Carpeta                        |
| -------------------------------------- | ------------------------------ |
| Clases, interfaces, herencia, `static` | [00_intro](00_intro/README.md) |

---

Otros patrones GoF frecuentes (Factory Method, Abstract Factory, Proxy, Command, etc.) no están en este repo; puedes usarlos como extensión del mismo enfoque: un directorio por patrón, `js/` + `ts/`, y un `README` con problema / solución / ubicación del código.
