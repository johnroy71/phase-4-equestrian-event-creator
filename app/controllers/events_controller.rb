class EventsController < ApplicationController

    
    def index
        render json: Event.all, status: :ok
    end

    def show
        rider = Event.find(params[:id])
        render json: rider, status: :ok
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    def update
        event = Event.find(params[:id])
        event.update!(event_params)
        render json: event, status: :ok
    end
    
    def destroy
        event = Event.find(params[:id])
        event.destroy!
        render json: {}, status: :ok
    end
    
    private 

    def event_params
        params.permit(:id, :name, :horse_id, :rider_id)
    end

end
