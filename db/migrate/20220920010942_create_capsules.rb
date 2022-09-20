class CreateCapsules < ActiveRecord::Migration[6.1]
  def change
    create_table :capsules do |t|
      t.string :capsule_name

      t.timestamps
    end
  end
end
