class User < ApplicationRecord

    has_secure_password
    has_many :riders
    has_many :horses
    has_many :events

    validates :username, presence: true, uniqueness: true

end
