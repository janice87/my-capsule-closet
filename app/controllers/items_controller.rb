class ItemsController < ApplicationController
    def index
        render json: Item.all
    end

    def show
        item = Item.find(params[:id])
        render json: item, status: :ok
    end

    def create
        item = Item.create!(item_params)
        render json: item, status: :created
    end

    def update
        item = Item.find(params[:id])
        item.update!(item_params)
        render json: item, status: :accepted
    end

    def destroy
        item = Item.find(params[:id])
        item.destroy
        head :no_content
    end

    private

    def item_params
        params.permit(:item_name, :brand, :price, :category, :image, :user_id)
    end
end 
                     