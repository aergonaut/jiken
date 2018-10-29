import React from 'react';
import { Query } from 'react-apollo';
import formatDistance from 'date-fns/formatDistance';
import incidentsQuery from './graphql/incidents_query.graphql';
import { IncidentsQuery } from './graphql/__generated__/IncidentsQuery';

class IncidentsQueryCmpt extends Query<IncidentsQuery, {}> {}

function distanceFromNow(date: string | number | Date): string {
  let baseDate = new Date();
  return formatDistance(date, baseDate);
}

const Incidents = () => (
  <IncidentsQueryCmpt query={incidentsQuery}>
    {({ loading, error, data }) => {
      if (loading) return 'loading';
      if (error) return 'error';

      return (
        <>
          <div className="Subhead Subhead--spacious">
            <h2 className="Subhead-heading">Incidents</h2>
          </div>
          {data.incidents.nodes.map((incident) => (
            <div className="Box">
              <div className="Box-header">
                <h3 className="Box-title">{incident.title}</h3>
              </div>
              {incident.messages.nodes.map((message) => (
                <div className="Box-body">
                  <div dangerouslySetInnerHTML={{ __html: message.bodyHTML }} />
                  <div className="text-small text-gray-light">
                    {`Posted ${distanceFromNow(message.updatedAt)} ago`}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </>
      );
    }}
  </IncidentsQueryCmpt>
);

export default Incidents;
export { Incidents };
