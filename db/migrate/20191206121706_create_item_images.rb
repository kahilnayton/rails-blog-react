class CreateItemImages < ActiveRecord::Migration[6.0]
  def change
    create_table :item_images do |t|
      t.text :image_url
      t.references :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
