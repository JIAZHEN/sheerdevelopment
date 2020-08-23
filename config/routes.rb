Rails.application.routes.draw do
  resources :posts

  root  to: "posts#index"

  get "/about", to: "static_pages#about"
  get "/which-chart", to: "static_pages#which_chart"

  get "/search", to: "posts#search"
  get "/signin", to: "sessions#new"

  post "/signin", to: "sessions#create"
  delete "/signout", to: "sessions#destroy"
end
