module Types
  class IncidentType < Types::BaseObject
    field :id, ID, null: false
    field :status, IncidentStatusType, null: false
    field :title, String, null: false
    field :messages, MessageType.connection_type, null: false
  end
end
