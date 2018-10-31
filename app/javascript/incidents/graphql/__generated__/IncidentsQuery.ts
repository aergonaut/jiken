/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IncidentsQuery
// ====================================================

export interface IncidentsQuery_incidents_nodes_messages_nodes {
  __typename: "Message";
  /**
   * The message body rendered into HTML using Markdown
   */
  bodyHTML: string;
  updatedAt: any;
}

export interface IncidentsQuery_incidents_nodes_messages {
  __typename: "MessageConnection";
  /**
   * A list of nodes.
   */
  nodes: (IncidentsQuery_incidents_nodes_messages_nodes | null)[] | null;
}

export interface IncidentsQuery_incidents_nodes {
  __typename: "Incident";
  id: string;
  title: string;
  messages: IncidentsQuery_incidents_nodes_messages;
}

export interface IncidentsQuery_incidents {
  __typename: "IncidentConnection";
  /**
   * A list of nodes.
   */
  nodes: (IncidentsQuery_incidents_nodes | null)[] | null;
}

export interface IncidentsQuery {
  incidents: IncidentsQuery_incidents;
}
