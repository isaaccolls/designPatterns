# Criteria (patrón Specification / consultas composables)

**Patrón de dominio y aplicación** — Modela reglas de búsqueda y filtrado como **objetos combinables** (AND, OR, orden, límites) en lugar de ensamblar strings o condicionales a mano.

[Navegación: Inicio](../../README.md) · [Índice](../../docs/INDICE.md) · [← Object Mother](../../creational/object-mother/README.md) · [→ Adapter](../../structural/adapter/README.md)

## Qué problema resuelve

APIs HTTP o repositorios que admiten **filtros dinámicos** sin acoplar el controlador a cada campo posible ni duplicar lógica SQL/ORM.

## Idea clave

Representas cada condición como un criterio; los criterios se **componen**. En este repo la pieza grande vive en una app Next.js que traduce query params a consultas (TypeORM / MariaDB según el ejemplo).

## En este repositorio

| Ubicación                  | Notas                                                    |
| -------------------------- | -------------------------------------------------------- |
| `criteria-example/`        | Proyecto Next.js listo para `npm run dev`, Docker, tests |
| `criteria-example/src/...` | Caso de uso “usuarios por criterios”, rutas API          |

### Ejemplo de URL con filtros

```
localhost:3000/api/users?filters[0][field]=name&filters[0][operator]=eq&filters[0][value]=marielis&orderBy=name&order=asc
```

Misma query partida en varias líneas (legibilidad):

```
localhost:3000/api/users?filters[0][field]=name
                        &filters[0][operator]=eq
                        &filters[0][value]=marielis
                        &orderBy=name
                        &order=asc
```

## Cuándo usarlo

- Búsquedas con muchos filtros opcionales en backends REST o GraphQL.
- Quieres testear reglas de filtrado **sin** pegarte a una sola consulta SQL monolítica.
