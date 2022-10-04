class Event < ApplicationRecord

    belongs_to :horse
    belongs_to :rider  

    validates :name, presence: true
    validates :horse_id, presence: true
    validates :rider_id, presence: true
    # validate :skill_level1
    # validate :skill_level2
    # validate :skill_level3
    # validate :skill_level4

    # private

    # def skill_level1
    #       if ((Rider.skill_level == 1) && (Horse.training_level < 5))  
    #     errors.add('Rider does not have enough skill for this horse.')
    #   end
    # end

    # def skill_level2
    #     if ((Rider.skill_level == 2) && (Horse.training_level < 4))  
    #       errors.add("Rider does not have enough skill for this horse.")
    #     end
    #   end

    #   def skill_level3
    #     if ((Rider.skill_level ==3) && (Horse.training_level < 3))  
    #       errors.add("Rider does not have enough skill for this horse.")
    #     end
    #   end

    #   def skill_level4
    #     if ((Rider.skill_level ==4) && (Horse.training_level <2))
    #     errors.add("Rider does not have enough skill for this horse.")
    #     end
    #   end

end
