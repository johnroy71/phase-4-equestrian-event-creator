class CreateRiders < ActiveRecord::Migration[7.0]
  def change
    create_table :riders do |t|
      t.string :name
      t.integer :age
      t.integer :skill_level

      t.timestamps
    end
  end
end
