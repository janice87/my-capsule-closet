class SessionsController < ApplicationController
    # skip_before_action :authenticate_user, only: [:create, :destroy]
    
    # post login
    # def create
    #     user = User.find_by(email: params[:email])
    #     if user&.authenticate(params[:password])
    #         session[:user_id] = user.id
    #         render json: user, status: :ok
    #     else
    #        render json: {error: "Invalid credentials"}, status: :unauthorized
    #     end
    # end
    
    # # delete logout
    # def destroy
    #     session.delete :user_id
    # end
end
