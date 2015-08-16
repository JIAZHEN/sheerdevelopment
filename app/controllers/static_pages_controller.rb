class StaticPagesController < ApplicationController
  def home
    @posts = Post.order("created_at DESC").take(3)
  end

  def blog
    @posts = Post.order("created_at DESC").take(10)
  end

  def sitemap
    render :layout => false
  end
end
