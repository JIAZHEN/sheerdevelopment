Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config

  ActiveAdmin.routes(self)
  scope module: 'api' do
    namespace :v1 do
      resources :posts
    end
  end
end
