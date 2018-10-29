module Types
  class MessageType < Types::BaseObject
    field :body, String, null: false
    field :bodyHTML, String, null: false, method: :body_html,
      description: "The message body rendered into HTML using Markdown"
    field :created_at, Types::TimestampType, null: false
    field :updated_at, Types::TimestampType, null: false
  end
end
