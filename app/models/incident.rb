# frozen_string_literal: true

class Incident < ApplicationRecord
  has_many :incident_reports
  has_many :services, through: :incident_reports
  has_many :messages

  validates :title, presence: true, length: { maximum: 255 }

  STATUS_OPEN = "OPEN"
  STATUS_MONITORING = "MONITORING"
  STATUS_RESOLVED = "RESOLVED"
end
