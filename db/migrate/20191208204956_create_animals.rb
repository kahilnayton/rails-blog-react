class CreateAnimals < ActiveRecord::Migration[6.0]
  def change
    create_table :animals do |t|
      t.string :title
      t.string :description
      t.integer :age
      t.string :sex
      t.string :default_image
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
