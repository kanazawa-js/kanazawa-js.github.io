import { graphql, useStaticQuery } from "gatsby";

type Props = {
  allConnpassEvent: {
    edges: {
      node: {
        id: number;
        title: string;
        event_url: string;
        started_at: string;
        ended_at: string;
        place: string;
        address: string;
      };
    }[];
  };
};

const useConnpassEvents = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      allConnpassEvent {
        edges {
          node {
            id
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
  `);

  return data.allConnpassEvent.edges.map(({ node }) => node);
};

export default useConnpassEvents;
