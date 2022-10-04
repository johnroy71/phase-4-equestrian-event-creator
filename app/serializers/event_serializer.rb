class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :horse_id, :rider_id
end
