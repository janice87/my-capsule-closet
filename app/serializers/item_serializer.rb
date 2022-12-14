class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :brand, :price, :category, :image, :user_id

  has_many :outfits
  has_many :outfit_items
end
