module Types
  class QueryType < Types::BaseObject
    field :services, ServiceType.connection_type, null: false
    field :service, ServiceType, null: true do
      argument :id, ID, required: true
    end
  end
end
