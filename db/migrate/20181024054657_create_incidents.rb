class CreateIncidents < ActiveRecord::Migration[5.2]
  def change
    create_table :incidents, id: :uuid do |t|
      t.string :title, null: false
      t.string :status, null: false, default: "OPEN"
      t.references :service, type: :uuid, foreign_key: true

      t.timestamps
    end
  end
end
