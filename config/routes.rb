Rails.application.routes.draw do
  resources :coffee_videos
  resources :coffee_images
  resources :saved_coffees
  resources :tastings
	
	resources :buyers
	resources :coffees
	
	post '/users/login' => 'users#login'
	get '/users/auth_session' => 'users#auth_session'
	get 'api/coffees/all' => 'coffees#all'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
