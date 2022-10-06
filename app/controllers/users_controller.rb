class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create]
     
    # get '/me'
    def show
      render json: current_user, status: :ok
    end

    # post '/signup'
    def create
    user = User.create!(user_params)
    session[:user_id] = user.id
        render json: user, status: :created
    end

    private
    
    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end
end
