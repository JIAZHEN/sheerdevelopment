module Api::V1
  class PostsController < ApiController
    def index
      render json: Post.all.to_json
    end

    def show
      @post = Post.find(params[:id])
      render json: @post.to_json
    end
  end
end
