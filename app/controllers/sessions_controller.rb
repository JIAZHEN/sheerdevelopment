class SessionsController < ApplicationController
  def new
    redirect_to(root_path) if signed_in?
  end

  def create
    user = User.find_by_email(params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      sign_in user
      redirect_to posts_path
    else
      flash.now[:danger] = "Incorrect Username or Password!"
      render "new"
    end
  end

  def destroy
    sign_out
    redirect_to posts_path
  end
end
