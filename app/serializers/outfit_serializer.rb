class OutfitSerializer < ActiveModel::Serializer
  attributes :id, :outfit_name, :capsule_id, :capsule
  has_many :items
  
  def capsule
    self.object.capsule.capsule_name
  end
end
