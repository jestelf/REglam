# 02 Known Gaps (GapCardV2)

## Формат
`id, description, reason, expected, risk, impact, mitigation, target_version, status`

## Карточки

### GAP-10
- id: `GAP-10`
- description: Проект намеренно содержит учебные UX/A11y-дефекты.
- reason: Нужен стенд для воспроизводимого ревью и тренировки диагностики.
- expected: Для продуктового релиза дефекты должны быть устранены.
- risk: High
- impact: Текущая версия не проходит итоговые quality-gates.
- mitigation: Зафиксированы `issue_id`, тест-кейсы и риски; план устранения переносится в следующую итерацию.
- target_version: `Final+1`
- status: Open

### GAP-11
- id: `GAP-11`
- description: Нет автоматизированного e2e smoke для сценариев записи.
- reason: В контуре не подключен test runner.
- expected: Регулярный автопрогон happy/invalid/recovery.
- risk: Medium
- impact: Возможны пропуски регресса при ручном прогоне.
- mitigation: Полный ручной прогон `docs/07_test_matrix.md` на каждом freeze.
- target_version: `Final+1`
- status: Open
