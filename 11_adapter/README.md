# Adapter

**Patrón estructural (GoF)** — Convierte la interfaz de una clase en otra que el cliente ya utiliza.

[Navegación: Inicio](../README.md) · [Índice detallado](../docs/INDICE.md) · [← Criteria](../10_criteria/README.md)

## Qué problema resuelve

Integrar un componente cuya API **no encaja** con la abstracción que el resto del código ya usa, **sin** modificar ese componente externo.

## Idea clave

Un **adaptador** implementa la interfaz “objetivo” y **delega** en el objeto “adaptado”, traduciendo llamadas (parámetros, orden de argumentos, nombres de métodos).

## En este repositorio

| Archivo         | Rol                                    |
| --------------- | -------------------------------------- |
| `ts/adapter.ts` | Contrato `Notifier` + clase adaptadora |
| `js/adapter.js` | Mismo flujo en JS                      |

Ejemplo: desde `11_adapter`, `node js/adapter.js` o `ts-node ts/adapter.ts`.

## Cuándo usarlo

- Envolver SDKs, REST clients o módulos legados con firma distinta.
- Aislar el dominio de detalles de infraestructura cambiantes.

## Relación con otros patrones

- **Facade**: simplifica _un subsistema entero_; Adapter hace compatible _una_ interfaz concreta.
- **Bridge**: separa dos jerarquías desde el diseño; Adapter se aplica sobre código ya existente.
