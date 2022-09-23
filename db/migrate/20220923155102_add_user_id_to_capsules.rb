class AddUserIdToCapsules < ActiveRecord::Migration[6.1]
  def change
    add_column :capsules, :user_id, :integer
  end
end
