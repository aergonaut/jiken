module Types
  class ServiceType < Types::BaseObject
    field :name, String, null: false
    field :status, ServiceStatusType, null: false
    field :incidents, IncidentType.connection_type, null: false
    field :incident, IncidentType, null: true do
      argument :id, ID, required: true
    end
  end
end