class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :items
  has_many :outfits
  has_many :capsules
end
