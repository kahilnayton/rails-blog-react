class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :title
      t.string :description
      t.string :make
      t.string :model
      t.string :options
      t.integer :year
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
