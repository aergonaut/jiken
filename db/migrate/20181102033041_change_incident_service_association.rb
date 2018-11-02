class ChangeIncidentServiceAssociation < ActiveRecord::Migration[5.2]
  def change
    remove_column :incidents, :service_id

    create_table :incident_reports, id: :uuid do |t|
      t.references :incident, type: :uuid, foreign_key: true
      t.references :service, type: :uuid, foreign_key: true

      t.timestamps
    end
  end
end
