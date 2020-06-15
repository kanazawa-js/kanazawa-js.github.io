/** @jsx jsx */
import { jsx } from "theme-ui"
import { Text, Link } from "@theme-ui/components"
import * as moment from 'moment'
import 'moment/locale/ja'

moment.locale('ja')

type EventsProps = {
  events: {
    event_id: number
    title: string
    event_url: string
    started_at: string
    ended_at: string
    place: string
    address: string
  }[]
}

const Events = ({ events }: EventsProps) => (
  <div>
    {events.length > 0 ?
      (events.map(event => {
        if (event !== null) {
          const startedAt = moment(event.started_at).format('YYYY/MM/DD (ddd) HH:mm')
          const endedAt = moment(event.ended_at).format('HH:mm')
          return (
            <div key={event.event_id} sx={{ fontSize: [1, 2] }}>
              <Link sx={{ fontSize: [2, 3]}} href={event.event_url}>{event.title}</Link>
              <Text>日時: {startedAt}-{endedAt}</Text>
              <Text>会場: {event.place}</Text>
              <Text>住所: {event.address}</Text>
            </div>
          )
        }
      })) : (
        <Text>直近の開催イベントはありません。</Text>
      )
    }
  </div>
)

export default Events 
