class CapsuleSerializer < ActiveModel::Serializer
  attributes :id, :capsule_name
  has_many :outfits
  belongs_to :user
end
