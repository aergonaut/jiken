class Service < ApplicationRecord
  has_many :incidents

  validates :name, presence: true, length: { maximum: 255 }
end
