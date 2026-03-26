# State

**Patrón de comportamiento (GoF)** — Permite que un objeto **altere su comportamiento** cuando su estado interno cambia; parece que cambia de clase.

[Navegación: Inicio](../README.md) · [Índice](../docs/INDICE.md) · [← Builder](../05_builder/README.md) · [→ Bridge](../07_bridge/README.md)

## Qué problema resuelve

Sustituir condicionales densos según “modo” o fase por **objetos estado** que encapsulan transiciones y acciones.

## Idea clave

El **contexto** delega en una referencia `State`; al hacer transición se **reemplaza** esa referencia por otra implementación concreta.

## En este repositorio

| Ubicación                           | Notas                            |
| ----------------------------------- | -------------------------------- |
| `ts/state-00.ts`, `ts/state-001.ts` | Ejemplos TypeScript              |
| `ts/tsconfig.json`                  | Config local para estos archivos |
| `js/01_example/`, `js/02_example/`  | Ejemplos en JavaScript           |

## Cuándo usarlo

- Máquinas de estados explícitas (pedidos, pagos, conexiones, UI asistida).
- Reglas de transición que quieres **localizar** en una clase por estado en lugar de flags dispersos.
