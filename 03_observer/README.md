# Observer

**Patrón de comportamiento (GoF)** — Relación **uno-a-muchos**: cuando el sujeto cambia, **notifica** automáticamente a los observadores registrados.

[Navegación: Inicio](../README.md) · [Índice](../docs/INDICE.md) · [← Strategy](../02_strategy/README.md) · [→ Decorator](../04_decorator/README.md)

## Qué problema resuelve

Mantener varias vistas o módulos **sincronizados** con un mismo estado sin acoplarlos fuertemente al emisor.

## Idea clave

**Subject** mantiene lista de observers; ante un cambio llama a un método común (`update`, `notify`, etc.). Es el núcleo de muchos sistemas de eventos.

## En este repositorio

| Ubicación                        | Notas                           |
| -------------------------------- | ------------------------------- |
| `ts/observer.ts`                 | Ejemplo principal en TypeScript |
| `js/01_example/observer.js`      | Primera variante en JS          |
| `js/02_example/itemsObserver.js` | Segunda variante (ítems)        |

## Cuándo usarlo

- Modelo–vista, UI reactiva, orquestación de side-effects ante cambios de dominio.
- Sustituir polling; **cuidado** con ciclos de notificación y orden si los observers modifican al subject.
