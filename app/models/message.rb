class Message < ApplicationRecord
  belongs_to :incident

  def body_html
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, autolink: true, no_intra_emphasis: true)
    markdown.render(body)
  end
end
