Rails.application.routes.draw do
  resources :coffee_videos
  resources :coffee_images
  resources :saved_coffees
  resources :tastings
	
	resources :buyers
	resources :coffees
	
	post '/users/login' => 'buyers#login'
	get '/users/auth_session' => 'buyers#auth_session'
	get 'api/coffees/all' => 'coffees#all'
	post 'api/buyers/save_coffee' => 'buyers#save_coffee'
	post 'api/buyers/unsave_coffee' => 'buyers#unsave_coffee'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
