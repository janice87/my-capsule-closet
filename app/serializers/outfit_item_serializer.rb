class OutfitItemSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :outfit_id, :image
 
  belongs_to :outfit 
  belongs_to :item

  def image
    self.object.item.image
  end
end
