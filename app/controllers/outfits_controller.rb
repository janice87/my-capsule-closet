class OutfitsController < ApplicationController
    def index
        render json: Outfit.all
    end

    def show
        outfit = Outfit.find(params[:id])
        render json: outfit, status: :ok
    end

    def create
        outfit = Outfit.create!(outfit_params)
        render json: outfit, status: :created
    end

    def update
        outfit = Outfit.find(params[:id])
        outfit.update!(outfit_params)
        render json: outfit, status: :accepted
    end

    def destroy
        outfit = Outfit.find(params[:id])
        outfit.destroy
        head :no_content
    end

    private

    def outfit_params
        params.permit(:outfit_name, :capsule_id)
    end
end
