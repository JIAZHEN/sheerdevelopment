module Api::V1
  class PostsController < ApiController
    def index
      render json: Post.published.includes(:tags).order(created_at: :desc).all
    end

    def show
      @post = Post.published.includes(:tags).friendly.find(params[:id])
      render json: @post
    end
  end
end
