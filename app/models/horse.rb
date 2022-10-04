class Horse < ApplicationRecord

    has_many :events
    has_many :riders, through: :events

    validates :name, presence: true
    validates :breed, presence: true
    validates :training_level, inclusion: 1..5

end
