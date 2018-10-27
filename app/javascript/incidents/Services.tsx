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
    Box: true,
    'Box-body': true,
    'Box--danger': status == 'IMPACTED',
    'text-red': status == 'IMPACTED',
  };
}

const Services = () => (
  <ServicesQueryCmpt query={servicesQuery}>
    {({ loading, error, data }) => {
      if (loading) return 'loading';
      if (error) return 'error';

      return (
        <div className="container-md px-3">
          <h2 className="f1-light border-bottom mb-4">Service Status</h2>
          {data.services.nodes.map((service) => (
            <div className={classnames(serviceClassNames(status))}>
              <div className="d-flex flex-justify-between">
                <div>{service.name}</div>
                <div>{service.status}</div>
              </div>
            </div>
          ))}
        </div>
      );
    }}
  </ServicesQueryCmpt>
);

export { Services };
export default Services;
