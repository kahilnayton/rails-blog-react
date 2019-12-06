class CreateSavedItems < ActiveRecord::Migration[6.0]
  def change
    create_table :saved_items do |t|
      t.references :user, null: false, foreign_key: true
      t.references :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
