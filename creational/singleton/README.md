# Singleton

**Patrón creacional (GoF)** — Garantiza **una única instancia** de una clase y un punto de acceso global controlado a ella.

[Navegación: Inicio](../../README.md) · [Índice](../../docs/INDICE.md) · [← Intro](../../intro/README.md) · [→ Strategy](../../behavioral/strategy/README.md)

## Qué problema resuelve

Evitar múltiples instancias que compiten por el mismo recurso o estado (p. ej. conexión, configuración, logger), cuando el diseño exige **exactamente una**.

## Idea clave

Constructor **privado** (TS) o convención que devuelve la instancia cacheada (JS); acceso mediante `getInstance()` o equivalente.

## En este repositorio

| Ubicación         | Notas                                         |
| ----------------- | --------------------------------------------- |
| `ts/singleton.ts` | Clase con constructor privado y `getInstance` |
| `js/singleton.js` | Variante con comprobación en `constructor`    |
| `js/weekDays.js`  | Ejemplo relacionado (días de la semana)       |
| `js/index.html`   | Entrada para probar en navegador              |

## Cuándo usarlo (y precaución)

- **Tiene sentido:** coordinación única, coste de crear el objeto alto, estado compartido deliberado.
- **Evitar abuso:** estado global dificulta tests y razonamiento; valora inyección de dependencias o módulos con estado único por proceso.
