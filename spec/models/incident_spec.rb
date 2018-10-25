require 'rails_helper'

RSpec.describe Incident, type: :model do
  it { is_expected.to belong_to(:service) }
  it { is_expected.to have_many(:messages) }
  it { is_expected.to validate_presence_of(:title) }
  it { is_expected.to validate_length_of(:title).is_at_most(255) }
end
