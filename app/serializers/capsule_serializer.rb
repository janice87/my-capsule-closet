class CapsuleSerializer < ActiveModel::Serializer
  attributes :id, :capsule_name
  has_many :outfits
end
