# Builder

**Patrón creacional (GoF)** — Separa la **construcción** de un objeto complejo de su **representación**, permitiendo distintos procesos de armado con la misma pieza de código cliente.

[Navegación: Inicio](../../README.md) · [Índice](../../docs/INDICE.md) · [← Decorator](../../structural/decorator/README.md) · [→ State](../../behavioral/state/README.md)

## Qué problema resuelve

Objetos con muchos campos opciones o pasos de inicialización ordenados; evita constructores con docenas de parámetros o estados inválidos intermedios.

## Idea clave

**Director** (opcional) coordina llamadas al **builder**; el builder acumula estado y expone `build()` al final.

## En este repositorio

| Ubicación                                      | Notas                        |
| ---------------------------------------------- | ---------------------------- |
| `ts/builder.ts`                                | Ejemplo TypeScript           |
| `js/01_example/`, `02_example/`, `03_example/` | Progresión de ejemplos en JS |

## Cuándo usarlo

- DSLs fluidos para configurar objetos (`query.where(...).orderBy(...)`).
- Mismo algoritmo de construcción con productos distintos (texto vs XML, etc.).
