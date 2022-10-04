class Rider < ApplicationRecord

    has_many :events
    has_many :horses, through: :events

    validates :name, presence: true
    validates :age, presence: true
    validates :skill_level, inclusion: 1..5

end
