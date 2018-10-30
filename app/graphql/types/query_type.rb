module Types
  class QueryType < Types::BaseObject
    field :services, ServiceType.connection_type, null: false

    def services
      Service.all
    end

    field :service, ServiceType, null: true do
      argument :id, ID, required: true
    end

    field :incidents, IncidentType.connection_type, null: false

    def incidents
      Incident.all
    end

    field :incident, IncidentType, null: true do
      argument :id, ID, required: true
    end

    def incident(id:)
      Incident.find(id)
    end
  end
end
