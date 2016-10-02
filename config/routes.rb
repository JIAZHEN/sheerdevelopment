Rails.application.routes.draw do

  resources :posts

  root  to: "posts#index"

  match "/sitemap" => "static_pages#sitemap", via: "get"
  match "/about" => "static_pages#home", via: "get"
  match "/search" => "posts#search", via: "get"

  match "/signin" => "sessions#new", via: "get"
  match "/signin" => "sessions#create", via: "post"
  match "/signout" => "sessions#destroy", via: "delete"
end
