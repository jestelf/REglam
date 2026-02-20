# 09 Risk Register

| ID | Риск | Вероятность | Влияние | Mitigation | Владелец | Статус |
|---|---|---|---|---|---|---|
| RSK-BRB-001 | Непредсказуемый user-flow из-за CTA mismatch (`UX-BRB-001`) | High | Medium | Исправить назначение и label CTA в следующем релизе | Author | Open |
| RSK-BRB-002 | Высокий отказ на форме из-за слабого recovery (`UX-BRB-002`) | High | High | Добавить field-level валидацию и автофокус на первом невалидном поле | Author | Open |
| RSK-BRB-003 | Снижение конверсии из-за конфликта CTA в шапке (`UX-BRB-003`) | Medium | Medium | Перестроить визуальную иерархию primary/secondary действий | Author | Open |
| RSK-BRB-004 | Потеря клавиатурной управляемости в mobile menu (`A11Y-BRB-001`) | Medium | Medium | Добавить focus trap и проверку Tab/Shift+Tab | Author | Open |
| RSK-BRB-005 | Отсутствие автотестов e2e для критичных сценариев | Medium | Medium | Подключить smoke e2e и сохранить ручной прогон до внедрения | Author | Monitoring |
