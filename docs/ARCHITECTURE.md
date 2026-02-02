# Архитектура проекта (Next.js App Router)

## Роутинг и страницы

Проект использует App Router (директория `app/`) и группировку маршрутов `(root)` для пользовательских страниц.

| Маршрут | Файл | Назначение |
| --- | --- | --- |
| `/` | `app/(root)/(home)/page.tsx` | Главная страница со списком персонажей и фильтрами. |
| `/episodes` | `app/(root)/episodes/page.tsx` | Список эпизодов. |
| `/locations` | `app/(root)/locations/page.tsx` | Список локаций. |
| `/char/[id]` | `app/(root)/char/[id]/page.tsx` | Детальная страница персонажа. |
| `/episode/[id]` | `app/(root)/episode/[id]/page.tsx` | Детальная страница эпизода. |
| `/location/[id]` | `app/(root)/location/[id]/page.tsx` | Детальная страница локации. |

## Иерархия layout’ов

- `app/layout.tsx` — глобальный layout: провайдер темы, глобальные стили и общий `<html>/<body>`.
- `app/(root)/layout.tsx` — layout для пользовательских страниц: шапка, подвал и контент страниц.

## Компонентная структура

Рекомендуемая и фактическая структура компонентов:

```
components/
  header/
    Header.tsx
    NavMenu.tsx
    Sidebar.tsx
    ModeToggle.tsx
  chars/
    CharsSearchbar.tsx
    CharsPerPageFilter.tsx
  ui/
    button.tsx
    input.tsx
    select.tsx
    dropdown-menu.tsx
    sheet.tsx
    card.tsx
  Footer.tsx
  Logo.tsx
  CharCard.tsx
  Char.tsx
  Episode.tsx
  Location.tsx
  NavPages.tsx
  NavPagesButton.tsx
  MoreCharsButton.tsx
```

## Процессы и утилиты

```
actions/
  chars.action.ts
  episodes.action.ts
  locations.action.ts

models/
  chars.model.ts
  episodes.model.ts
  locations.model.ts

lib/
  utils.ts
```

- `actions/` — слой получения данных (API-вызовы).
- `models/` — типы/модели данных.
- `lib/` — утилиты общего назначения.
