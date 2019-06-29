module Api::V1
  class PostsController < ApiController
    def index
      render json: Post.all
    end
  end
end
