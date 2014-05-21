namespace :db do
  desc "Fill database with sample data"
  task populate: :environment do
    User.create!(email: "jxie@example.com",
                 password: "password",
                 password_confirmation: "password")

    100.times do
      Post.create!(title: Faker::Name.title,
                   content: Faker::Lorem.paragraph(10),
                   url: "http://cdn.wonderfulengineering.com/wp-content/uploads/2014/07/background-wallpapers-7.jpg")
    end
  end
end