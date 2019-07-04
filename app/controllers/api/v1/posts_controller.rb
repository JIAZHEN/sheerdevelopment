module Api::V1
  class PostsController < ApiController
    def index
      render json: Post.includes(:tags).all
    end

    def show
      @post = Post.includes(:tags).friendly.find(params[:id])
      render json: @post
    end
  end
end
