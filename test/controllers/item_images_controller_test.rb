require 'test_helper'

class ItemImagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @item_image = item_images(:one)
  end

  test "should get index" do
    get item_images_url, as: :json
    assert_response :success
  end

  test "should create item_image" do
    assert_difference('ItemImage.count') do
      post item_images_url, params: { item_image: { image_url: @item_image.image_url, item_id: @item_image.item_id } }, as: :json
    end

    assert_response 201
  end

  test "should show item_image" do
    get item_image_url(@item_image), as: :json
    assert_response :success
  end

  test "should update item_image" do
    patch item_image_url(@item_image), params: { item_image: { image_url: @item_image.image_url, item_id: @item_image.item_id } }, as: :json
    assert_response 200
  end

  test "should destroy item_image" do
    assert_difference('ItemImage.count', -1) do
      delete item_image_url(@item_image), as: :json
    end

    assert_response 204
  end
end
