/* tslint:disable */
// This file was automatically generated and should not be edited.

import { ServiceStatus } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ServicesQuery
// ====================================================

export interface ServicesQuery_services_nodes {
  __typename: "Service";
  id: string;
  name: string;
  status: ServiceStatus;
}

export interface ServicesQuery_services {
  __typename: "ServiceConnection";
  /**
   * A list of nodes.
   */
  nodes: (ServicesQuery_services_nodes | null)[] | null;
}

export interface ServicesQuery {
  services: ServicesQuery_services;
}
