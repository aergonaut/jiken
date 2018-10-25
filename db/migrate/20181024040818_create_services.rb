class CreateServices < ActiveRecord::Migration[5.2]
  def change
    enable_extension 'pgcrypto' unless extension_enabled? 'pgcrypto'

    create_table :services, id: :uuid do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
