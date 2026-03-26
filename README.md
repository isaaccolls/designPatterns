# Patrones de diseño en JavaScript y TypeScript

Ejemplos ejecutables agrupados por categoría (`intro/`, `creational/`, `structural/`, `behavioral/`, `domain-application/`). Cada patrón tiene su `README.md` junto al código en `js/` y/o `ts/`.

**Índice ampliado (propósito, cuándo usarlo y enlaces cruzados):** [docs/INDICE.md](docs/INDICE.md)

## Ejecutar ejemplos

| Entorno    | Requisitos                                        | Comando típico               |
| ---------- | ------------------------------------------------- | ---------------------------- |
| TypeScript | `nvm use v16.16.0`, `npm i -g ts-node`            | `ts-node ruta/al/archivo.ts` |
| JavaScript | Node o navegador (p. ej. `index.html` en `intro`) | `node ruta/al/archivo.js`    |

El ejemplo **Criteria** incluye una app Next.js: ver [domain-application/criteria/README.md](domain-application/criteria/README.md) y [domain-application/criteria/criteria-example/README.md](domain-application/criteria/criteria-example/README.md).

## Clasificación GoF y material extra

Los patrones del _Gang of Four_ se suelen agrupar así; en este repo aparecen también temas de **dominio/aplicación** y **pruebas**.

### Creación (`creational/`)

Gestionan _cómo_ se instancian los objetos.

| Patrón                             | Carpeta                                                        |
| ---------------------------------- | -------------------------------------------------------------- |
| Singleton                          | [creational/singleton](creational/singleton/README.md)         |
| Builder                            | [creational/builder](creational/builder/README.md)             |
| Object Mother _(fixtures de test)_ | [creational/object-mother](creational/object-mother/README.md) |

### Estructura (`structural/`)

Componen clases u objetos en estructuras más grandes.

| Patrón    | Carpeta                                                |
| --------- | ------------------------------------------------------ |
| Decorator | [structural/decorator](structural/decorator/README.md) |
| Bridge    | [structural/bridge](structural/bridge/README.md)       |
| Facade    | [structural/facade](structural/facade/README.md)       |
| Adapter   | [structural/adapter](structural/adapter/README.md)     |

### Comportamiento (`behavioral/`)

Distribuyen responsabilidades y comunicación entre objetos.

| Patrón   | Carpeta                                              |
| -------- | ---------------------------------------------------- |
| Strategy | [behavioral/strategy](behavioral/strategy/README.md) |
| Observer | [behavioral/observer](behavioral/observer/README.md) |
| State    | [behavioral/state](behavioral/state/README.md)       |

### Dominio y aplicación (`domain-application/`)

| Tema                              | Carpeta                                                              |
| --------------------------------- | -------------------------------------------------------------------- |
| Criteria / búsqueda con criterios | [domain-application/criteria](domain-application/criteria/README.md) |

### Introducción (`intro/`)

| Contenido                              | Carpeta                  |
| -------------------------------------- | ------------------------ |
| Clases, interfaces, herencia, `static` | [intro](intro/README.md) |

---

Otros patrones GoF frecuentes (Factory Method, Abstract Factory, Proxy, Command, etc.) no están en este repo; puedes usarlos como extensión del mismo enfoque: categoría → carpeta del patrón → `js/` + `ts/` + `README`.
