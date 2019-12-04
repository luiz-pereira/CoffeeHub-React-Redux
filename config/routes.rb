Rails.application.routes.draw do
  resources :coffee_videos
  resources :coffee_images
  resources :saved_coffees
  resources :tastings
  resources :users
  resources :coffees
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
