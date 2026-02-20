# North Line Barbershop UX Review Sandbox (v2.0)

Локальный статический проект для одиночной frontend-разработки и формализованного UX/A11y review.

## Запуск

1. Вариант без сервера: открыть `index.html` в браузере.
2. Рекомендуемый вариант:
```powershell
cd d:\Дисциплины\REglam
python -m http.server 8080
```
Открыть: `http://localhost:8080`

## Что проверять

1. Два обязательных сценария:
- основной: запись на визит через Hero CTA и форму;
- альтернативный: переход через меню к услугам/мастерам и возврат к записи.
2. Для каждого сценария: `happy`, `invalid`, `recovery`.
3. Намеренные дефекты для учебного разбора:
- `UX-BRB-001`
- `UX-BRB-002`
- `UX-BRB-003`
- `A11Y-BRB-001`
4. Полный прогон матрицы тестов в `docs/07_test_matrix.md`.
5. Проверка quality-gates и итогового статуса в `docs/05_final_checklist.md`.

## Ограничения

1. Без backend, БД, хостинга.
2. Стек: `HTML/CSS/JS`.
3. Приемка только `Pass/Fail`.

## Документы

1. Регламент: `docs/00_reglament_single_dev.md`
2. Scope: `docs/01_spec_scope.md`
3. Quality-gates: `docs/06_quality_gates.md`
4. Test Matrix: `docs/07_test_matrix.md`
5. Review log: `docs/03_review_log.md`
6. Release notes: `docs/08_release_notes.md`
7. Risk register: `docs/09_risk_register.md`
