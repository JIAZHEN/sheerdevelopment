class PostsController < ApplicationController
  before_filter :signed_in_admin, only: [:new, :create, :update, :edit, :destroy]

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
  	@post = Post.find_by_title(params[:id].tr("_", " "))
  end

  def index
  	@posts = Post.order("created_at DESC").paginate(page: params[:page])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(params[:post])
      flash[:success] = "Profile updated"
      redirect_to @post
    else
      render 'edit'
    end
  end

  def destroy
    Post.find(params[:id]).destroy
    flash[:success] = "Post destroyed."
    redirect_to posts_path
  end
end
