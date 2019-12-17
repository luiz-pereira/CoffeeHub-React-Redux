class CoffeesController < ApplicationController

	def all
		@coffees = Coffee.all
		render json: @coffees, status:200
	end

end
