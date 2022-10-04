class HorsesController < ApplicationController

    def index
        render json: Horse.all, status: :ok
    end

    def show
        horse = Horse.find(params[:id])
        render json: horse, status: :ok
    end

    def create
        horse = Horse.create!(horse_params)
        render json: horse, status: :created
    end

    private 

    def horse_params
        params.permit(:name, :breed, :training_level)
    end
end
