# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do 
     Layman.create!(
          name: Faker::Name.name,
          email: Faker::Internet.email,
          password: "password"
     )
end

Layman.all.each do |layman|
     3.times do 
          layman.posts.create(
               language_or_framework: Faker::ProgrammingLanguage.name,
               doc_url: Faker::Internet.url,
               doc_title: Faker::App.name,
               section_of_concern: Faker::Lorem.paragraph(sentence_count: 5) 
          )
     end
end
