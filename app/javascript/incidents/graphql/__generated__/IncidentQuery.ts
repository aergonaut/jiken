/* tslint:disable */
// This file was automatically generated and should not be edited.

import { IncidentStatus } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: IncidentQuery
// ====================================================

export interface IncidentQuery_incident_messages_nodes {
  __typename: "Message";
  /**
   * The message body rendered into HTML using Markdown
   */
  bodyHTML: string;
  updatedAt: any;
}

export interface IncidentQuery_incident_messages_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface IncidentQuery_incident_messages {
  __typename: "MessageConnection";
  /**
   * A list of nodes.
   */
  nodes: (IncidentQuery_incident_messages_nodes | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: IncidentQuery_incident_messages_pageInfo;
}

export interface IncidentQuery_incident {
  __typename: "Incident";
  id: string;
  title: string;
  status: IncidentStatus;
  messages: IncidentQuery_incident_messages;
}

export interface IncidentQuery {
  incident: IncidentQuery_incident | null;
}

export interface IncidentQueryVariables {
  id: string;
  cursor?: string | null;
}
