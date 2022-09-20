class CapsulesController < ApplicationController
    def index
        render json: Capsule.all, include: ["outfits", "outfits.items"]
    end

    def show
        capsule = Capsule.find(params[:id])
        render json: capsule, include: ["outfits", "outfits.items"], status: :ok
    end

    def create
        capsule = Capsule.create!(capsule_params)
        render json: capsule, include: ["outfits", "outfits.items"], status: :created
    end

    def update
        capsule = Capsule.find(params[:id])
        capsule.update!(capsule_params)
        render json: capsule, include: ["outfits", "outfits.items"], status: :accepted
    end

    def destroy
        capsule = Capsule.find(params[:id])
        capsule.destroy
        head :no_content
    end

    private
    
    def capsule_params
        params.permit(:capsule_name)
    end
end
