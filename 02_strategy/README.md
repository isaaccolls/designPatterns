# Strategy

**Patrón de comportamiento (GoF)** — Define una familia de algoritmos, los encapsula y los hace **intercambiables** sin modificar el código del contexto que los usa.

[Navegación: Inicio](../README.md) · [Índice](../docs/INDICE.md) · [← Singleton](../01_singleton/README.md) · [→ Observer](../03_observer/README.md)

## Qué problema resuelve

Sustituir ramas `if/switch` gigantes por **objetos intercambiables** que implementan el mismo contrato (precios, autenticación, serialización, etc.).

## Idea clave

**Contexto** + interfaz **Strategy** + **concrete strategies**; el contexto delega y permite `setStrategy` en tiempo de ejecución.

## En este repositorio

| Ubicación         | Notas                                               |
| ----------------- | --------------------------------------------------- |
| `ts/strategy.ts`  | Login con varias estrategias (DB, servicio, Google) |
| `js/strategy.js`  | Ventas con impuestos / descuento / extranjero       |
| `js/strategy1.js` | Variante adicional                                  |
| `js/index.html`   | Entrada navegador                                   |

## Cuándo usarlo

- Variantes de un mismo comportamiento que cambian con frecuencia o por configuración.
- Necesitas cumplir **Open/Closed**: añadir estrategias nuevas sin tocar el contexto existente.
