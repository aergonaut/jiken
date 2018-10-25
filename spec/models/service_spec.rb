require 'rails_helper'

RSpec.describe Service, type: :model do
  it { is_expected.to have_many(:incidents) }
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_length_of(:name).is_at_most(255) }
end
