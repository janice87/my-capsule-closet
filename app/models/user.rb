class User < ApplicationRecord
    has_many :items
    has_many :outfits
    has_many :capsules

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true

    has_secure_password
end
