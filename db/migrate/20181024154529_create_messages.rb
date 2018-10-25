class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages, id: :uuid do |t|
      t.text :body
      t.references :incident, type: :uuid, foreign_key: true

      t.timestamps
    end
  end
end
