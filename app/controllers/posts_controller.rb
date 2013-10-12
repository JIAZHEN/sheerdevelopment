class PostsController < ApplicationController
  before_filter :signed_in_admin, only: [:new, :create]

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
  	@post = Post.find(params[:id])
  end

  def index
  	@posts = Post.find(:all, order: "created_at DESC")
  end
end
