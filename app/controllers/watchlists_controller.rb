class WatchlistsController < ApplicationController
    def index
        watchlists = Watchlist.all
        render json: watchlists, status: 200
    end
    
    def show
        selected_watchlist = Watchlist.find_by(id: params[:id])
        render json: selected_watchlist, status: 200
    end

    def create
        new_watchlist = Watchlist.create(watchlist_params)
        render json: new_watchlist, status: :created
    end


    def update
        selected_watchlist = Watchlist.find(params[:id])
        selected_watchlist.update(watchlist_params)
        render json: selected_watchlist, status: 200
    end

    def destroy
        selected_watchlist = Watchlist.find(params[:id])
        selected_watchlist.destroy
        render json: selected_watchlist, status: 200
    end

    private

    def watchlist_params
        params.permit(:id, :data, :user_id, :T, :v, :vw, :o, :c, :h, :l, :t, :n)
    end
end
