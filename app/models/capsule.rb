class Capsule < ApplicationRecord
    has_many :outfits
    validates :capsule_name, presence: true, uniqueness: true
end
