class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy, :show_items, :show_saved_Items]
  before_action :authorize_request, except: [:create,:show_items, :show_saved_Items]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode(user_id: @user.id, username: @user.username)
      render json: {user: @user,token: @token}, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end


def show_items
  @items=Item.where(user_id: params[:id])
  render json: @items, include: :user, status: :ok
 end
 
 def show_saved_Items
  @items=@user.itemsSaved
  render json: @items, include: :user, status: :ok
 end

 def add_saved_Item
    @item = @current_user.savedItems.new(item_id: params[:itemId])
    if @item.save
      render json: @item, status: :created
    else
      render json: @item.errors, status: :unprocessable_entity
    end
 end

 def delete_saved_Item
  @current_user.savedItems.where(item_id: params[:itemId]).destroy_all
  
 end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :email, :password, :itemId, :firstname, :lastname, :location)
    end
end
