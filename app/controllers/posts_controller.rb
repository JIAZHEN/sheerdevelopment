class PostsController < ApplicationController
  before_filter :signed_in_admin, only: [:new, :create, :update, :edit, :destroy]
  before_filter :a_post_by_url, only: [:show, :update, :edit, :destroy]

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(params[:post])
  	if @post.save
  		redirect_to @post
  	else
  		render 'new'
  	end
  end

  def show
  end

  def index
  	@posts = Post.order("created_at DESC").paginate(page: params[:page])
  end

  def edit
  end

  def update
    if @post.update_attributes(params[:post])
      flash[:success] = "Profile updated"
      redirect_to @post
    else
      render 'edit'
    end
  end

  def destroy
    flash[:success] = "Post destroyed."
    redirect_to posts_path
  end

  def a_post_by_url
    @post = Post.find(params[:id])
  end
end
