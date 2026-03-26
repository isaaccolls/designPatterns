# Object Mother

**Patrón de soporte a pruebas** (no es uno de los 23 GoF) — Centraliza la creación de **objetos de test** con valores por defecto sensatos y métodos para variaciones comunes.

[Navegación: Inicio](../../README.md) · [Índice](../../docs/INDICE.md) · [← Facade](../../structural/facade/README.md) · [→ Criteria](../../domain-application/criteria/README.md)

## Qué problema resuelve

Tests llenos de `new User(...)` repetidos, frágiles y difíciles de actualizar cuando el modelo crece.

## Idea clave

Una clase o módulo “madre” expone fábricas estáticas (`validUser()`, `adminUser()`, …) que devuelven **instancias listas**; las pruebas solo sobreescriben lo que importa.

## En este repositorio

| Ubicación             | Notas              |
| --------------------- | ------------------ |
| `ts/object_mother.ts` | Ejemplo TypeScript |

Relacionado conceptualmente con **Factory Method** y **Builder**, pero el objetivo es **datos de prueba**, no producción.

## Cuándo usarlo

- Modelos de dominio con muchos campos obligatorios.
- Equipos que quieren fixtures **reutilizables** y legibles en muchos archivos de test.
