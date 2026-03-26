# Facade

**Patrón estructural (GoF)** — Ofrece una **interfaz unificada y sencilla** a un subsistema más complejo (varias clases, protocolos o APIs).

[Navegación: Inicio](../README.md) · [Índice](../docs/INDICE.md) · [← Bridge](../07_bridge/README.md) · [→ Object Mother](../09_object-mother/README.md)

## Qué problema resuelve

Los clientes no deberían conocer el grafo interno de dependencias; reducir ruido y acoplamiento al **punto de entrada** del módulo.

## Idea clave

Una clase **Facade** compone instancias del subsistema y expone pocos métodos de alto nivel (`operation1`, `operation2`, …) que orquestan llamadas internas.

## En este repositorio

| Ubicación      | Notas                                    |
| -------------- | ---------------------------------------- |
| `ts/facade.ts` | Cliente → Facade → Part1 / Part2 / Part3 |

## Cuándo usarlo

- Bibliotecas con muchas clases públicas: expones una fachada “opinionated” para el 80% de casos.
- No confundir con **Adapter**: Facade simplifica; Adapter traduce una interfaz a otra.
