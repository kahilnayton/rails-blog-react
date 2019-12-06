class ItemImagesController < ApplicationController
  before_action :set_item_image, only: [:show, :update, :destroy]

  # GET /item_images
  def index
    @item_images = ItemImage.all

    render json: @item_images
  end

  # GET /item_images/1
  def show
    render json: @item_image
  end

  # POST /item_images
  def create
    @item_image = ItemImage.new(item_image_params)

    if @item_image.save
      render json: @item_image, status: :created, location: @item_image
    else
      render json: @item_image.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /item_images/1
  def update
    if @item_image.update(item_image_params)
      render json: @item_image
    else
      render json: @item_image.errors, status: :unprocessable_entity
    end
  end

  # DELETE /item_images/1
  def destroy
    @item_image.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item_image
      @item_image = ItemImage.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def item_image_params
      params.require(:item_image).permit(:image_url, :item_id)
    end
end
