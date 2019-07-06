module Api::V1
  class PostsController < ApiController
    def index
      scope = default_scope

      if params[:tag].present?
        scope = scope.tagged_with(params[:tag].downcase.strip)
      elsif params[:keyword].present?
        scope = scope.search_by_keyword(params["keyword"])
      end

      posts = scope.order(created_at: :desc).page(params[:page]).per(9)
      render json: { posts: posts, pagination: pagination_meta(posts) }
    end

    def show
      @post = default_scope.friendly.find(params[:id])
      render json: @post
    end

    private

    def default_scope
      Post.includes(:tags).published
    end

    def pagination_meta(object)
      {
        current_page: object.current_page,
        next_page: object.next_page,
        prev_page: object.prev_page,
        total_pages: object.total_pages,
        total_count: object.total_count
      }
    end
  end
end
