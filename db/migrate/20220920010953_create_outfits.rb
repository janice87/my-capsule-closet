class CreateOutfits < ActiveRecord::Migration[6.1]
  def change
    create_table :outfits do |t|
      t.string :outfit_name
      t.integer :capsule_id

      t.timestamps
    end
  end
end
