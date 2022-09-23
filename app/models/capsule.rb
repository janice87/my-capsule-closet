class Capsule < ApplicationRecord
    has_many :outfits, dependent: :destroy
    belongs_to :user

    validates :capsule_name, presence: true, uniqueness: true
end
