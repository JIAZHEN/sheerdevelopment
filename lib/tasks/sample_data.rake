namespace :db do
  desc "Fill database with sample data"
  task populate: :environment do
    User.create!(name: "Jiazhen",
                 email: "jiazhenxie515@gmail.com",
                 password: "6Ih=6q6L",
                 password_confirmation: "6Ih=6q6L",
                 admin: true)
  end
end