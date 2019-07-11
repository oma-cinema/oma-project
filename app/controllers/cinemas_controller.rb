class CinemasController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  def index
    @cinemas = Cinema.all.where.not(latitude: nil, longitude: nil)

    @markers = @cinemas.map do |cinema|
      {
        lat: cinema.latitude,
        lng: cinema.longitude,
        infoWindow: render_to_string(partial: "infowindow", locals: { cinema: cinema })

      }
    end
  end

  def show
    @cinema = Cinema.find(params[:id])
    @reviews = Review.where(cinema_id: @cinema.id)

    @review = Review.new
    # we need `cinema_id` to asssociate review with corresponding cinema
    @review.save
  end

  def new
    @cinema = Cinema.new
  end

  def create
    @cinema = Cinema.new(cinema_params)
    @cinema.save

    redirect_to cinema_path(@cinema)
  end

  def edit
    @cinema = Cinema.find(params[:id])
  end

  def update
    @cinema = Cinema.find(params[:id])
    @cinema.update(cinema_params)

    redirect_to cinema_path(@cinema)
  end

  def destroy
    @cinema = Cinema.find(params[:id])
    @cinema.destroy

    redirect_to cinemas_path
  end

  private

  def cinema_params
    params.require(:cinema).permit(:name, :address, :photo)
  end
end
