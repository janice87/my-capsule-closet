class OutfitItemsController < ApplicationController
    def index
        render json: OutfitItem.all.order(:outfit_id)
    end

    def show
        outfit_item = OutfitItem.find(params[:id])
        render json: outfit_item, status: :ok
    end

    def create
        outfit_item = OutfitItem.create!(outfit_item_params)
        render json: outfit_item, status: :created
    end

    def update
        outfit_item = OutfitItem.find(params[:id])
        outfit_item.update!(outfit_item_params)
        render json: outfit_item, status: :accepted
    end

    def destroy
        outfit_item = OutfitItem.find(params[:id])
        outfit_item.destroy
        head :no_content
    end

    private

    def outfit_item_params
        params.permit(:item_id, :outfit_id)
    end
end
