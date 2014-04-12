require 'spec_helper'

describe "AuthenticationPages" do

  subject { page }

  describe "signin page" do
    before { visit signin_path }
    it { should have_selector('title', :text => full_title("Sign in") ) }
  end

  describe "signin" do
    before { visit signin_path }

    describe "with invalid information" do
      before { click_button "Sign in" }

      it { should have_selector('title', :text => full_title("Sign in") ) }
      it { should have_selector('div.alert.alert-danger', text: "Invalid") }

      describe "after visiting another page" do
        before { click_link "Home" }
        it { should_not have_selector('div.alert.alert-danger') }
      end
    end

    describe "with valid information" do
      let(:admin) { create(:admin) }
      before do
        fill_in "Email",    with: admin.email.upcase
        fill_in "Password", with: admin.password
        click_button "Sign in"
      end
      it { should have_link("Sign out",    href: signout_path) }
      it { should_not have_link("Sign in", href: signin_path) }

      describe "followed by signout" do
        before { click_link "Sign out" }
        it { should have_selector('title', :text => full_title("") ) }
      end
    end
  end
end
