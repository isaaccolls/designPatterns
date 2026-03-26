# Índice de patrones

[Volver al README principal](../README.md)

Guía rápida con **qué problema ataca cada patrón**, **cuándo suele usarse** y enlaces al detalle de cada carpeta.

---

## Introducción

|                      |                                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| **00 — Intro (OOP)** | [00_intro/README.md](../00_intro/README.md)                                                           |
| _Qué es_             | Repaso de clase, interfaz, herencia y miembros estáticos en TypeScript (base para entender el resto). |
| _Enlace siguiente_   | [Singleton](../01_singleton/README.md)                                                                |

---

## Creación

|                    |                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| **01 — Singleton** | [01_singleton/README.md](../01_singleton/README.md)                                               |
| _Qué es_           | Una sola instancia compartida; acceso global controlado.                                          |
| _Cuándo_           | Recursos costosos, estado compartido acotado, coordinación única (con cuidado con estado global). |
| _Vecinos_          | ← [Intro](../00_intro/README.md) · → [Strategy](../02_strategy/README.md)                         |

|                  |                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------- |
| **05 — Builder** | [05_builder/README.md](../05_builder/README.md)                                         |
| _Qué es_         | Construcción paso a paso de objetos compuestos o con muchos parámetros opcionales.      |
| _Cuándo_         | Evitar constructores con decenas de argumentos; distintas “recetas” del mismo producto. |
| _Vecinos_        | ← [Decorator](../04_decorator/README.md) · → [State](../06_state/README.md)             |

|                        |                                                                             |
| ---------------------- | --------------------------------------------------------------------------- |
| **09 — Object Mother** | [09_object-mother/README.md](../09_object-mother/README.md)                 |
| _Qué es_               | Fábrica dedicada a objetos de prueba reutilizables y consistentes.          |
| _Cuándo_               | Tests que necesitan el mismo grafo de datos con pequeñas variantes.         |
| _Vecinos_              | ← [Facade](../08_facade/README.md) · → [Criteria](../10_criteria/README.md) |

---

## Estructura

|                    |                                                                               |
| ------------------ | ----------------------------------------------------------------------------- |
| **04 — Decorator** | [04_decorator/README.md](../04_decorator/README.md)                           |
| _Qué es_           | Añadir responsabilidades a un objeto en tiempo de ejecución, envolviéndolo.   |
| _Cuándo_           | Comportamientos opcionales combinables sin explosión de subclases.            |
| _Vecinos_          | ← [Observer](../03_observer/README.md) · → [Builder](../05_builder/README.md) |

|                 |                                                                       |
| --------------- | --------------------------------------------------------------------- |
| **07 — Bridge** | [07_bridge/README.md](../07_bridge/README.md)                         |
| _Qué es_        | Separar jerarquía de abstracción de la jerarquía de implementación.   |
| _Cuándo_        | Abstracción e implementación deben evolucionar por separado.          |
| _Vecinos_       | ← [State](../06_state/README.md) · → [Facade](../08_facade/README.md) |

|                 |                                                                                       |
| --------------- | ------------------------------------------------------------------------------------- |
| **08 — Facade** | [08_facade/README.md](../08_facade/README.md)                                         |
| _Qué es_        | Interfaz única y simple sobre un subsistema complejo.                                 |
| _Cuándo_        | Ocultar módulos internos y reducir acoplamiento del cliente.                          |
| _Vecinos_       | ← [Bridge](../07_bridge/README.md) · → [Object Mother](../09_object-mother/README.md) |

|                  |                                                                           |
| ---------------- | ------------------------------------------------------------------------- |
| **11 — Adapter** | [11_adapter/README.md](../11_adapter/README.md)                           |
| _Qué es_         | Traduce la interfaz de una clase existente a la que el cliente espera.    |
| _Cuándo_         | Integrar librerías legadas o servicios con API incompatible.              |
| _Vecinos_        | ← [Criteria](../10_criteria/README.md) · → _(fin del recorrido numerado)_ |

---

## Comportamiento

|                   |                                                                                   |
| ----------------- | --------------------------------------------------------------------------------- |
| **02 — Strategy** | [02_strategy/README.md](../02_strategy/README.md)                                 |
| _Qué es_          | Familia de algoritmos intercambiables encapsulados; el contexto delega.           |
| _Cuándo_          | Variantes de un mismo comportamiento y evitar `if/switch` extensos.               |
| _Vecinos_         | ← [Singleton](../01_singleton/README.md) · → [Observer](../03_observer/README.md) |

|                   |                                                                                   |
| ----------------- | --------------------------------------------------------------------------------- |
| **03 — Observer** | [03_observer/README.md](../03_observer/README.md)                                 |
| _Qué es_          | Sujeto notifica a dependientes cuando cambia.                                     |
| _Cuándo_          | Modelo-vista, eventos, pub/sub interno al dominio.                                |
| _Vecinos_         | ← [Strategy](../02_strategy/README.md) · → [Decorator](../04_decorator/README.md) |

|                |                                                                                        |
| -------------- | -------------------------------------------------------------------------------------- |
| **06 — State** | [06_state/README.md](../06_state/README.md)                                            |
| _Qué es_       | El objeto delega en un estado concreto; el comportamiento cambia al cambiar de estado. |
| _Cuándo_       | Máquinas de estados explícitas frente a booleanos o flags acumulados.                  |
| _Vecinos_      | ← [Builder](../05_builder/README.md) · → [Bridge](../07_bridge/README.md)              |

---

## Criterios / aplicación

|                     |                                                                                                |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| **10 — Criteria**   | [10_criteria/README.md](../10_criteria/README.md)                                              |
| _Qué es_            | Composición de filtros y ordenación para consultas (enfoque tipo especificación / CQRS light). |
| _Cuándo_            | APIs de búsqueda con filtros dinámicos sin concatenar SQL ni condicionales interminables.      |
| _App de referencia_ | [criteria-example](../10_criteria/criteria-example/README.md)                                  |
| _Vecinos_           | ← [Object Mother](../09_object-mother/README.md) · → [Adapter](../11_adapter/README.md)        |
