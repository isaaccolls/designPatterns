# Decorator

**Patrón estructural (GoF)** — Añade **responsabilidades** a un objeto dinámicamente envolviéndolo en “capas” que comparten la misma interfaz.

[Navegación: Inicio](../README.md) · [Índice](../docs/INDICE.md) · [← Observer](../03_observer/README.md) · [→ Builder](../05_builder/README.md)

## Qué problema resuelve

Extender comportamiento **en tiempo de ejecución** sin subclasificar todas las combinaciones posibles (explosión combinatoria de clases).

## Idea clave

Decoradores implementan el mismo tipo que el componente base y **delegan** en un envoltorio interior, añadiendo lógica antes/después.

## En este repositorio

| Ubicación                          | Notas                   |
| ---------------------------------- | ----------------------- |
| `ts/decorator.ts`                  | Ejemplo TypeScript      |
| `js/01_example/`, `js/02_example/` | Variantes en JavaScript |

## Cuándo usarlo

- Funcionalidades opcionales apilables (logging, caché, compresión sobre streams, etc.).
- Prefiere composición frente a herencia cuando las combinaciones son muchas.
