FactoryGirl.define do
  factory :post do
    title     	"My title"
    content    	"Wish my career the best"
  end

  factory :user do
    name        "Joe"
    email       "jxie@example.com"
    password    "password"
    password_confirmation "password"

    factory :admin do
      admin     true
    end
  end
end