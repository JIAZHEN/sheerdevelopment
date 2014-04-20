require 'spec_helper'

describe "AuthenticationPages" do

  subject { page }

  describe "signin page" do
    before { visit new_user_session_path }
    it { should have_title(full_title("Sign in") ) }
  end

  describe "signin" do
    before { visit new_user_session_path }

    describe "with invalid information" do
      before { click_button "Sign in" }

      it { should have_title(full_title("Sign in") ) }
      it { should have_selector('div.alert.alert-danger', text: "Invalid") }

      describe "after visiting another page" do
        before { click_link "Home" }
        it { should_not have_selector('div.alert.alert-danger') }
      end
    end

    describe "with valid information" do
      let(:user) { create(:user) }
      before do
        fill_in "user[email]",    with: user.email.upcase
        fill_in "user[password]", with: user.password
        click_button "Sign in"
      end
      it { should have_link("Sign out",    href: destroy_user_session_path) }
      it { should_not have_link("Sign in", href: new_user_session_path) }

      describe "visit sign in" do
        before { visit new_user_session_path }
        it "should redirect to home path" do
          expect(page.current_path).to eql "/"
        end
      end

      describe "followed by signout" do
        before { click_link "Sign out" }
        it { should have_title(full_title("") ) }
      end
    end
  end
end
