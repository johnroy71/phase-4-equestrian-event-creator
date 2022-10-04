class CreateHorses < ActiveRecord::Migration[7.0]
  def change
    create_table :horses do |t|
      t.string :name
      t.string :breed
      t.integer :training_level

      t.timestamps
    end
  end
end
