# 03 Review Log (ReviewIssueV2)

| issue_id | category | severity | location | environment | steps | expected | actual | frequency | regression_risk | developer_comment | decision | status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| UX-BRB-001 | UX | Major | Hero CTA | Win11, Chrome, 1280x720 | Открыть сайт, нажать CTA `Смотреть услуги` | Переход к секции услуг | Переход сразу к форме записи (`#booking`) | Always | Medium | Намеренный конфликт ожидания и результата | DEC-005 | Open |
| UX-BRB-002 | UX | Major | Форма записи / submit | Win11, Chrome, 1280x720 | Оставить обязательные поля пустыми и отправить форму | Ошибки по полям + фокус на первом невалидном поле | Только общее сообщение без field-level подсказок и автофокуса | Always | High | Намеренно упрощенный recovery-path | DEC-005 | Open |
| UX-BRB-003 | UX | Minor | Header CTA hierarchy | Win11, Chrome, 1280x720 | Сравнить визуальный приоритет двух CTA в шапке | Вторичный CTA визуально слабее primary | Вторичный CTA стилизован как primary и конкурирует по весу | Always | Low | Намеренный дефект визуальной иерархии | DEC-005 | Open |
| A11Y-BRB-001 | A11y | Minor | Mobile menu / keyboard | Win11, Chrome, 360x740 | Открыть мобильное меню, пройти Tab/Shift+Tab | Фокус остается в открытом меню | Нет focus trap, фокус уходит за пределы drawer | Always | Medium | Учебный A11y-дефект в рамках UX-кейса | DEC-005 | Open |
