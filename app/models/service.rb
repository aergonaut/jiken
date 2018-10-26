class Service < ApplicationRecord
  has_many :incidents

  validates :name, presence: true, length: { maximum: 255 }

  def status
    return "IMPACTED" if incidents.any? { |incident| incident.status == "OPEN" }
    return "MONITORING" if incidents.any? { |incident| incident.status == "MONITORING" }
    "OPERATIONAL"
  end
end
