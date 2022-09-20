class OutfitItem < ApplicationRecord
    belongs_to :item 
    belongs_to :outfit

    validates :item_id, :outfit_id, presence:true
end
