Rails.application.routes.draw do
  resources :posts

  root  to: "posts#index"

  match "/about" => "static_pages#about", via: "get"
  match "/search" => "posts#search", via: "get"

  match "/signin" => "sessions#new", via: "get"
  match "/signin" => "sessions#create", via: "post"
  match "/signout" => "sessions#destroy", via: "delete"
end
