class User < ApplicationRecord
    has_many :items

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true

    has_secure_password
end
