import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import formatDistance from 'date-fns/formatDistance';
import incidentQuery from './graphql/incident_query.graphql';
import { RouteComponentProps } from 'react-router-dom';
import {
  IncidentQuery,
  IncidentQueryVariables,
} from './graphql/__generated__/IncidentQuery';
import { IncidentStatus } from '../../../__generated__/globalTypes';

function distanceFromNow(date: string | number | Date): string {
  let baseDate = new Date();
  return formatDistance(date, baseDate);
}

function stateColorForStatus(status: IncidentStatus): string {
  switch (status) {
    case IncidentStatus.RESOLVED:
      return 'State--green';
      break;
    case IncidentStatus.MONITORING:
      return 'State--yellow';
      break;
    case IncidentStatus.OPEN:
      return 'State--red';
      break;
  }
}

class IncidentQueryCmpt extends Query<IncidentQuery, IncidentQueryVariables> {}

const Incident = (props: RouteComponentProps<any> & {}) => (
  <IncidentQueryCmpt
    query={incidentQuery}
    variables={{ id: props.match.params.id }}
  >
    {({ loading, error, data }) => {
      if (loading) return <div>loading...</div>;
      if (error) return <div>error</div>;

      return (
        <div className="container-md px-3">
          <div className="Subhead">
            <h2 className="Subhead-heading">{data.incident.title}</h2>
          </div>
          <div className="mb-3">
            <span
              className={`State ${stateColorForStatus(data.incident.status)}`}
            >
              {data.incident.status}
            </span>
          </div>
          {data.incident.messages.nodes.map((message) => (
            <div className="Box">
              <div className="Box-body">
                <div dangerouslySetInnerHTML={{ __html: message.bodyHTML }} />
                <div className="text-small text-gray-light">
                  {`Posted ${distanceFromNow(message.updatedAt)} ago`}
                </div>
              </div>
            </div>
          ))}
          <div className="mb-3 py-3">
            <Link to="/">&larr; Current Status</Link>
          </div>
        </div>
      );
    }}
  </IncidentQueryCmpt>
);

export default Incident;
