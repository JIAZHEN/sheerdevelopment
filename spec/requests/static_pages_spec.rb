require 'spec_helper'

describe "StaticPages" do

	subject { page }
  
	describe "Home page" do
		before { visit root_path }
		it { should have_selector('h1', :text => 'Mr. Jiazhen Xie') }
		it { should have_selector('title', :text => full_title('') ) }
	end

	describe "About page" do
		before { visit about_path }
		it { should have_selector('h1', :text => 'About Me') }
		it { should have_selector('title', :text => full_title('About Me')) }
	end

	describe "Contact page" do
		before { visit contact_path }
		it { should have_selector('h1', :text => 'Contact') }
		it { should have_selector('title', :text => full_title('Contact')) }
	end

end
