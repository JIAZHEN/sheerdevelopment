module Api::V1
  class PostsController < ApiController
    def index
      scope = default_scope

      if (params[:tag])
        scope = scope.tagged_with(params[:tag].downcase.strip)
      elsif params[:keyword]
        scope = scope.search_by_keyword
      end

      render json: scope.order(created_at: :desc).all
    end

    def show
      @post = default_scope.friendly.find(params[:id])
      render json: @post
    end

    private

    def default_scope
      Post.includes(:tags).published
    end
  end
end
