class StaticPagesController < ApplicationController
  def about
  end

  def sitemap
    render :layout => false
  end
end
