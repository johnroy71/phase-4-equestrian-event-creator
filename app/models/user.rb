class User < ApplicationRecord

    
    has_many :riders
    has_many :horses
    has_many :events
    has_secure_password

    # validates :username, presence: true, uniqueness: true

end
