class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.integer :horse_id
      t.integer :rider_id

      t.timestamps
    end
  end
end
