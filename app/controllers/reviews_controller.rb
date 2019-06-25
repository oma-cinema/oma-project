class ReviewsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  def new
    # we need @cinema in our `simple_form_for`
    @cinema = Cinema.find(params[:cinema_id])
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    # we need `cinema_id` to asssociate review with corresponding cinema
    @review.cinema = Cinema.find(params[:cinema_id])
    @review.save

    redirect_to cinema_path(@review.cinema)
  end

  private

  def review_params
    params.require(:review).permit(:rating, :user_name, :content)
  end
end
