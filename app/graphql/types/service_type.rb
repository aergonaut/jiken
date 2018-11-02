module Types
  class ServiceType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :status, ServiceStatusType, null: false
    field :incidents, IncidentType.connection_type, null: false
    field :incident_reports, [IncidentReportType], null: false
  end
end
