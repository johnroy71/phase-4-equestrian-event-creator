class RidersController < ApplicationController

    def index
        render json: Rider.all, status: :ok
    end

    def show
        rider = Rider.find(params[:id])
        render json: rider, status: :ok
    end

    def create
        rider = Rider.create!(rider_params)
        render json: rider, status: :created
    end

    private 

    def rider_params
        params.permit(:name, :age, :skill_level)
    end

end
