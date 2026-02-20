# 04 Decisions (DecisionRecordV2)

## Формат записей
`decision_id, date, decision_type, context, options, choice, rationale, impact, expiry, linked_ids`

### DEC-005
- decision_id: `DEC-005`
- date: `2026-02-20`
- decision_type: `Accept`
- context: Учебный релиз барбершоп-стенда с намеренными UX/A11y ошибками.
- options: `Исправить все до RC`, `Сохранить ошибки для ревью`, `Частично исправить`
- choice: `Сохранить ошибки для ревью`
- rationale: Цель итерации - воспроизводимый набор дефектов для тренировки процесса UX-review.
- impact: Релиз получает осознанный `FAIL` до следующей итерации исправлений.
- expiry: `Final+1`
- linked_ids: `UX-BRB-001, UX-BRB-002, UX-BRB-003, A11Y-BRB-001, GAP-10`

### DEC-006
- decision_id: `DEC-006`
- date: `2026-02-20`
- decision_type: `Fix`
- context: Домен проекта изменен с общего sandbox на барбершоп.
- options: `Оставить общий sandbox`, `Сделать барбершоп-домен`
- choice: `Сделать барбершоп-домен`
- rationale: Предметный домен дает более реалистичные пользовательские сценарии.
- impact: Обновлены UI, тест-матрица, риски, release notes и quality evidence.
- expiry: `Final`
- linked_ids: `docs/01_spec_scope.md, docs/07_test_matrix.md`
