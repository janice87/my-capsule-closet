class AddUserIdToOutfits < ActiveRecord::Migration[6.1]
  def change
    add_column :outfits, :user_id, :integer
  end
end
