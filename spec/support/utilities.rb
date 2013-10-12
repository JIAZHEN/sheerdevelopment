include ApplicationHelper


def sign_in admin
  visit signin_path
  fill_in "Email",    with: admin.email
  fill_in "Password", with: admin.password
  click_button "Sign in"
end