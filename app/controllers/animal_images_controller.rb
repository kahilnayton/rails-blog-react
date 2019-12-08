class AnimalImagesController < ApplicationController
  before_action :set_animal_image, only: [:show, :update, :destroy]

  # GET /animal_images
  def index
    @animal_images = AnimalImage.all

    render json: @animal_images
  end

  # GET /animal_images/1
  def show
    render json: @animal_image
  end

  # POST /animal_images
  def create
    @animal_image = AnimalImage.new(animal_image_params)

    if @animal_image.save
      render json: @animal_image, status: :created, location: @animal_image
    else
      render json: @animal_image.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /animal_images/1
  def update
    if @animal_image.update(animal_image_params)
      render json: @animal_image
    else
      render json: @animal_image.errors, status: :unprocessable_entity
    end
  end

  # DELETE /animal_images/1
  def destroy
    @animal_image.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_animal_image
      @animal_image = AnimalImage.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def animal_image_params
      params.require(:animal_image).permit(:image_url, :animal_id)
    end
end
