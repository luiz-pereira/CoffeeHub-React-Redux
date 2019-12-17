class UsersController < ApplicationController

	before_action :authorize_request, except: :login
  
	def login
		@user = User.find_by email: params[:email]
    if @user.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @user.id)
      time = Time.now + 30.days.to_i
      render json: {token: token, exp: time.strftime("%m-%d-%Y %H:%M"),
                     user: @user}, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

	def auth_session
		render json: @current_user
	end


  private

  def login_params
    params.permit(:email, :password)
  end
	
end
