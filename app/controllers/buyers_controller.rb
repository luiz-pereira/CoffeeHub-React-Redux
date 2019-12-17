class BuyersController < ApplicationController

	def create
		@buyer = Buyer.new({
			name: params[:name],
			password: params[:password],
			email: params[:email],
			company: params[:company]
		})
		@buyer.category = @buyer.type
		@token = JsonWebToken.encode(user_id: @buyer.id)
		@buyer.save ? (render json: {user: @buyer, token: @token}, status: 201) : (render json: {error: "invalid parameters, please check", status: 500})
	end

end