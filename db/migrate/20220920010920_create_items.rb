class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :item_name
      t.string :brand
      t.integer :price
      t.string :category
      t.string :image
      t.integer :user_id

      t.timestamps
    end
  end
end
