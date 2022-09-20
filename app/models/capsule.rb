class Capsule < ApplicationRecord
    has_many :outfits, dependent: :destroy
    validates :capsule_name, presence: true, uniqueness: true
end
