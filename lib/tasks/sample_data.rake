namespace :db do
  desc "Fill database with sample data"
  task admin: :environment do
    User.create!(username: "jiazhen",
                 email: "jxie@example.com",
                 password: "password",
                 password_confirmation: "password",
                 admin: true)
  end

  task populate: :environment do
    100.times do
      Post.create!(title: Faker::Name.title,
                   subtitle: Faker::Lorem.sentence,
                   content: Faker::Lorem.paragraph(10))
    end
  end

  task initialise: ["db:drop", "db:create", "db:migrate", "db:admin", "db:populate"]
end
