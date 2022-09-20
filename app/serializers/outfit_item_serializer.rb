class OutfitItemSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :outfit_id
 
  belongs_to :outfit 
  belongs_to :item
end
