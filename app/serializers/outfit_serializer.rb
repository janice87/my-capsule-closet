class OutfitSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :outfit_name, :capsule_id, :capsule
  has_many :items
  has_many :outfit_items
  belongs_to :user
  
  def capsule
    self.object.capsule.capsule_name
  end
end
