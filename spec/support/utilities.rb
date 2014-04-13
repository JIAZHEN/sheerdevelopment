include ApplicationHelper


def sign_in admin
  visit signin_path
  fill_in "session[email]",    with: admin.email
  fill_in "session[password]", with: admin.password
  click_button "Sign In"
end