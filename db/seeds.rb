# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding Horses..."

horse1 = Horse.create(name: 'Fargo', breed: 'Piebald', training_level: 5)
horse2 = Horse.create(name: 'Gus', breed: 'Appaloosa', training_level: 3)
horse3 = Horse.create(name: 'Doc', breed: 'Walking Horse', training_level: 5)
horse4 = Horse.create(name: 'Lucy', breed: 'Quarterhorse', training_level: 4)
horse5 = Horse.create(name: 'Frankie', breed: 'Bay', training_level: 1)
horse6 = Horse.create(name: 'Wendy', breed: 'Nag', training_level: 3)
horse7 = Horse.create(name: 'Socks', breed: 'Mule', training_level: 2)
horse8 = Horse.create(name: 'Olive', breed: 'Racking Horse', training_level: 2)
horse9 = Horse.create(name: 'Morsel', breed: 'Piebald', training_level: 3)
horse10 = Horse.create(name: 'Screamo', breed: 'Donkey', training_level: 1)

puts "Seeding Riders..."

rider1 = Rider.create(name: "Teresa", age: 29, skill_level: 5)
rider2 = Rider.create(name: "Jenny", age: 45, skill_level: 3)
rider3 = Rider.create(name: "Jim", age: 55, skill_level: 4)
rider4 = Rider.create(name: "Brent", age: 27, skill_level: 2)
rider5 = Rider.create(name: "Sarah", age: 33, skill_level: 1)
rider6 = Rider.create(name: "Bailey", age: 22, skill_level: 5)
rider7 = Rider.create(name: "Brianna", age: 24, skill_level: 5)
rider8 = Rider.create(name: "Susan", age: 29, skill_level: 4)
rider9 = Rider.create(name: "Kevin", age: 51, skill_level: 2)
rider10 = Rider.create(name: "Bartholomew", age: 18, skill_level: 3)



puts "Seeding Events..."

Event.create(name: "Trail Challenge", horse_id: horse1.id, rider_id: rider1.id)
Event.create(name: "Obstacle Course", horse_id: horse5.id, rider_id: rider6.id)
Event.create(name: "Trail Challenge", horse_id: horse4.id, rider_id: rider2.id)
Event.create(name: "In Hand", horse_id: horse3.id, rider_id: rider7.id)
Event.create(name: "Obstacle Course", horse_id: horse9.id, rider_id: rider10.id)

puts "Seeding Complete!!!!"