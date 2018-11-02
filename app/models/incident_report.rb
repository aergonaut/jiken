class IncidentReport < ApplicationRecord
  belongs_to :incident
  belongs_to :service
end
