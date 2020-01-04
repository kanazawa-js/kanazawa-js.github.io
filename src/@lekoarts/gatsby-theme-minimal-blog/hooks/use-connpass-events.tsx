import { graphql, useStaticQuery } from "gatsby"

type Props = {
  allConnpassEvents: {
    nodes: {
      events: {
        event_id: number
        title: string
        event_url: string
        started_at: string
        ended_at: string
        place: string
        address: string
      }[]
    }[]
  }
}

const useConnpassEvents = () => {
  const data = useStaticQuery<Props>(graphql`
  query {
    allConnpassEvents {
      nodes {
        events {
          event_id
          title
          event_url
          started_at
          ended_at
          place
          address
        }
      }
    }
  }
`)

  if (data.allConnpassEvents.nodes.length > 0) {
    return data.allConnpassEvents.nodes[0].events
  }

  return data.allConnpassEvents.nodes
}

export default useConnpassEvents
