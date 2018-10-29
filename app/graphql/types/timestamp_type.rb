class Types::TimestampType < Types::BaseScalar
  description "An ISO 8601-formatted timestamp"

  def self.coerce_input(input_value, context)
    begin
      Time.utc.iso8601(input_value)
    rescue ArgumentError
      raise GraphQL::CoercionError, "#{input_value} is not a valid ISO 8601-formatted timestamp"
    end
  end

  def self.coerce_result(ruby_value, context)
    ruby_value.iso8601
  end
end
