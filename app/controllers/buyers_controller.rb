class BuyersController < ApplicationController

	before_action :authorize_request, except: :login

	def create
		@buyer = Buyer.new({
			name: params[:name],
			password: params[:password],
			email: params[:email],
			company: params[:company]
		})
		@buyer.category = @buyer.type
		@token = JsonWebToken.encode(user_id: @buyer.id)
		@buyer.save ? (render json: {user: @buyer.serializable_hash(include: [:coffees, :tastings]), token: @token}, status: 201) : (render json: {error: "invalid parameters, please check", status: 500})
	end

	def save_coffee
		@buyer = Buyer.find(params[:user][:userId])
		@coffee = Coffee.find(params[:coffee][:id])
		if !@buyer.coffees.include?(@coffee)
			@buyer.coffees << @coffee
		end
		render json: @buyer, status: 200
	end

	def unsave_coffee
		@buyer = Buyer.find(params[:user][:userId])
		@coffee = Coffee.find(params[:coffee][:id])
		@saved_coffee = @buyer.saved_coffees.find_by coffee_id: @coffee.id
		@saved_coffee.destroy
		render json: @buyer, status: 200
	end

  
	def login
		@buyer = Buyer.find_by email: params[:email]
		
    if @buyer.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @buyer.id)
			time = Time.now + 30.days.to_i
			# render json: @buyer
      render json: {user: @buyer.serializable_hash(include: [:coffees, :tastings]), token: token, exp: time.strftime("%m-%d-%Y %H:%M")}, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

	def auth_session
		@buyer = Buyer.find (@current_user.id)
		render json: @buyer
	end

  private

  def login_params
    params.permit(:email, :password)
  end
	

end