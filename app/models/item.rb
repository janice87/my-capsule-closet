class Item < ApplicationRecord
    belongs_to :user
    has_many :outfit_items
    has_many :outfits, through: :outfit_items

    validates :item_name, :brand, :price, :category, :image, :user_id, presence: true
end
