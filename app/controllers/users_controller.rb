class UsersController < ApplicationController
    def index
        render json: User.all
    end

    # def create
    #     render json:
    # end

    # def show

    # end
end
