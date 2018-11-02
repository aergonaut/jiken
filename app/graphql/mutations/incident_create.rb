module Mutations
  class IncidentCreate < GraphQL::Schema::RelayClassicMutation
    field :incident, Types::IncidentType, null: true

    argument :title, String, required: true
  end
end
