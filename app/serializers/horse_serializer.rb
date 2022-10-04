class HorseSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :training_level
end
