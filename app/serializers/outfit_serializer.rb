class OutfitSerializer < ActiveModel::Serializer
  attributes :id, :outfit_name, :capsule_id
  has_many :items
end
