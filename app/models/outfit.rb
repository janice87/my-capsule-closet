class Outfit < ApplicationRecord
    belongs_to :capsule 
    has_many :outfit_items, dependent: :destroy 
    has_many :items, through: :outfit_items 

    validates :outfit_name, presence: true
end
