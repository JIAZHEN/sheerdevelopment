class StaticPagesController < ApplicationController
  def home
  end

  def about
  end

  def contact
  end

  def sitemap
    render :layout => false
  end
end
