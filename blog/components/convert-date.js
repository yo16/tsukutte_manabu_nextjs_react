// https://date-fns.org/
// https://date-fns.org/v2.29.3/docs/format
import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

export default function ConvertDate({ dateISO }) {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), 'yyyy年M月d日 HH:mm', {
        locale: ja,
      })}
    </time>
  )
}
