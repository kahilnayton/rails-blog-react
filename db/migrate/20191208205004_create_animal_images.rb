class CreateAnimalImages < ActiveRecord::Migration[6.0]
  def change
    create_table :animal_images do |t|
      t.text :image_url
      t.references :animal, null: false, foreign_key: true

      t.timestamps
    end
  end
end
