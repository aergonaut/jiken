import * as React from 'react';
import { Query } from 'react-apollo';
import * as classnames from 'classnames';
import * as servicesQuery from './graphql/services_query.graphql';
import { ServicesQuery } from './graphql/__generated__/ServicesQuery';

class ServicesQueryCmpt extends Query<ServicesQuery, {}> {}

/**
 * Generates `classnames` for the service according to the `status`
 * @param  status The status
 * @return        An Object to pass to `classnames`
 */
function serviceClassNames(status: string): { [key: string]: boolean } {
  return {
    'mb-3': true,
    Box: true,
    'Box-body': true,
    'Box--danger': status == 'IMPACTED',
    'text-red': status == 'IMPACTED',
    'text-green': status == 'OPERATIONAL',
    'border-green': status == 'OPERATIONAL',
    'bg-green-light': status == 'OPERATIONAL',
  };
}

const Services = () => (
  <ServicesQueryCmpt query={servicesQuery}>
    {({ loading, error, data }) => {
      if (loading) return 'loading';
      if (error) return 'error';

      return (
        <>
          <div className="Subhead">
            <h2 className="Subhead-heading">Service Status</h2>
          </div>
          {data.services.nodes.map((service) => (
            <div
              key={service.id}
              className={classnames(serviceClassNames(service.status))}
            >
              <div className="d-flex flex-justify-between">
                <div>{service.name}</div>
                <div>{service.status}</div>
              </div>
            </div>
          ))}
        </>
      );
    }}
  </ServicesQueryCmpt>
);

export { Services };
export default Services;
