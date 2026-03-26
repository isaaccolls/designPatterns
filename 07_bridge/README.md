# Bridge

**Patrón estructural (GoF)** — **Desacopla** una abstracción de su implementación para que ambas puedan evolucionar por separado. (También citado como _Handle/Body_.)

[Navegación: Inicio](../README.md) · [Índice](../docs/INDICE.md) · [← State](../06_state/README.md) · [→ Facade](../08_facade/README.md)

## Qué problema resuelve

Cuando la jerarquía “variante de concepto × variante de plataforma” genera demasiadas subclases (p. ej. forma × API gráfica).

## Idea clave

La abstracción mantiene una referencia a un **Implementor**; las subclases de abstracción delegan operaciones reales en esa interfaz.

## En este repositorio

| Ubicación                          | Notas                        |
| ---------------------------------- | ---------------------------- |
| `ts/bridge.ts`                     | Ejemplo principal TypeScript |
| `js/01_example/`, `js/02_example/` | Variantes JavaScript         |

## Cuándo usarlo

- Quieres intercambiar implementaciones en runtime o aislar detalles de bajo nivel (drivers, renderers).
- Diferente de **Adapter**: Bridge se diseña de entrada con dos jerarquías; Adapter reconcilia APIs ya existentes.
