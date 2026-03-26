# Índice de patrones

[Volver al README principal](../README.md)

Guía rápida con **qué problema ataca cada patrón**, **cuándo suele usarse** y enlaces al detalle de cada carpeta. El recorrido lineal sigue el orden didáctico original del material.

---

## Introducción

|                    |                                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| **Intro (OOP)**    | [intro/README.md](../intro/README.md)                                                                 |
| _Qué es_           | Repaso de clase, interfaz, herencia y miembros estáticos en TypeScript (base para entender el resto). |
| _Enlace siguiente_ | [Singleton](../creational/singleton/README.md)                                                        |

---

## Creación

|               |                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------- |
| **Singleton** | [creational/singleton/README.md](../creational/singleton/README.md)                               |
| _Qué es_      | Una sola instancia compartida; acceso global controlado.                                          |
| _Cuándo_      | Recursos costosos, estado compartido acotado, coordinación única (con cuidado con estado global). |
| _Vecinos_     | ← [Intro](../intro/README.md) · → [Strategy](../behavioral/strategy/README.md)                    |

|             |                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------- |
| **Builder** | [creational/builder/README.md](../creational/builder/README.md)                             |
| _Qué es_    | Construcción paso a paso de objetos compuestos o con muchos parámetros opcionales.          |
| _Cuándo_    | Evitar constructores con decenas de argumentos; distintas “recetas” del mismo producto.     |
| _Vecinos_   | ← [Decorator](../structural/decorator/README.md) · → [State](../behavioral/state/README.md) |

|                   |                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------- |
| **Object Mother** | [creational/object-mother/README.md](../creational/object-mother/README.md)                         |
| _Qué es_          | Fábrica dedicada a objetos de prueba reutilizables y consistentes.                                  |
| _Cuándo_          | Tests que necesitan el mismo grafo de datos con pequeñas variantes.                                 |
| _Vecinos_         | ← [Facade](../structural/facade/README.md) · → [Criteria](../domain-application/criteria/README.md) |

---

## Estructura

|               |                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------- |
| **Decorator** | [structural/decorator/README.md](../structural/decorator/README.md)                           |
| _Qué es_      | Añadir responsabilidades a un objeto en tiempo de ejecución, envolviéndolo.                   |
| _Cuándo_      | Comportamientos opcionales combinables sin explosión de subclases.                            |
| _Vecinos_     | ← [Observer](../behavioral/observer/README.md) · → [Builder](../creational/builder/README.md) |

|            |                                                                                       |
| ---------- | ------------------------------------------------------------------------------------- |
| **Bridge** | [structural/bridge/README.md](../structural/bridge/README.md)                         |
| _Qué es_   | Separar jerarquía de abstracción de la jerarquía de implementación.                   |
| _Cuándo_   | Abstracción e implementación deben evolucionar por separado.                          |
| _Vecinos_  | ← [State](../behavioral/state/README.md) · → [Facade](../structural/facade/README.md) |

|            |                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| **Facade** | [structural/facade/README.md](../structural/facade/README.md)                                         |
| _Qué es_   | Interfaz única y simple sobre un subsistema complejo.                                                 |
| _Cuándo_   | Ocultar módulos internos y reducir acoplamiento del cliente.                                          |
| _Vecinos_  | ← [Bridge](../structural/bridge/README.md) · → [Object Mother](../creational/object-mother/README.md) |

|             |                                                                                         |
| ----------- | --------------------------------------------------------------------------------------- |
| **Adapter** | [structural/adapter/README.md](../structural/adapter/README.md)                         |
| _Qué es_    | Traduce la interfaz de una clase existente a la que el cliente espera.                  |
| _Cuándo_    | Integrar librerías legadas o servicios con API incompatible.                            |
| _Vecinos_   | ← [Criteria](../domain-application/criteria/README.md) · → _(fin del recorrido lineal)_ |

---

## Comportamiento

|              |                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------- |
| **Strategy** | [behavioral/strategy/README.md](../behavioral/strategy/README.md)                                 |
| _Qué es_     | Familia de algoritmos intercambiables encapsulados; el contexto delega.                           |
| _Cuándo_     | Variantes de un mismo comportamiento y evitar `if/switch` extensos.                               |
| _Vecinos_    | ← [Singleton](../creational/singleton/README.md) · → [Observer](../behavioral/observer/README.md) |

|              |                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------- |
| **Observer** | [behavioral/observer/README.md](../behavioral/observer/README.md)                                 |
| _Qué es_     | Sujeto notifica a dependientes cuando cambia.                                                     |
| _Cuándo_     | Modelo-vista, eventos, pub/sub interno al dominio.                                                |
| _Vecinos_    | ← [Strategy](../behavioral/strategy/README.md) · → [Decorator](../structural/decorator/README.md) |

|           |                                                                                           |
| --------- | ----------------------------------------------------------------------------------------- |
| **State** | [behavioral/state/README.md](../behavioral/state/README.md)                               |
| _Qué es_  | El objeto delega en un estado concreto; el comportamiento cambia al cambiar de estado.    |
| _Cuándo_  | Máquinas de estados explícitas frente a booleanos o flags acumulados.                     |
| _Vecinos_ | ← [Builder](../creational/builder/README.md) · → [Bridge](../structural/bridge/README.md) |

---

## Criterios / aplicación

|                     |                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| **Criteria**        | [domain-application/criteria/README.md](../domain-application/criteria/README.md)                       |
| _Qué es_            | Composición de filtros y ordenación para consultas (enfoque tipo especificación / CQRS light).          |
| _Cuándo_            | APIs de búsqueda con filtros dinámicos sin concatenar SQL ni condicionales interminables.               |
| _App de referencia_ | [criteria-example](../domain-application/criteria/criteria-example/README.md)                           |
| _Vecinos_           | ← [Object Mother](../creational/object-mother/README.md) · → [Adapter](../structural/adapter/README.md) |
