module Types
  class IncidentReportType < Types::BaseObject
    field :id, ID, null: false
    field :incident, IncidentType, null: false
    field :service, ServiceType, null: false
    field :created_at, TimestampType, null: false
    field :updated_at, TimestampType, null: false
  end
end
