namespace :db do
  desc "Fill database with sample data"
  task populate: :environment do
    User.create!(username: "jiazhen",
                 email: "jxie@example.com",
                 password: "password",
                 password_confirmation: "password",
                 admin: true)

    100.times do
      Post.create!(title: Faker::Name.title,
                   subtitle: Faker::Lorem.sentence,
                   content: Faker::Lorem.paragraph(10))
    end
  end
end
