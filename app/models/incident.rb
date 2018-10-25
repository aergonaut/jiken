# frozen_string_literal: true

class Incident < ApplicationRecord
  belongs_to :service
  has_many :messages

  validates :title, presence: true, length: { maximum: 255 }

  STATUS_OPEN = "OPEN"
  STATUS_MONITORING = "MONITORING"
  STATUS_RESOLVED = "RESOLVED"
end
