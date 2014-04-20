require 'spec_helper'

describe "PostPages" do
  let(:user) { create(:user) }
  subject { page }

  describe "create new post page" do
  	before(:each) do
      sign_in user
      visit new_post_path
    end
  	let(:submit) { "Create post" }

  	it { should have_title(full_title('Create post')) }

  	describe "with invalid inforamtion" do
  		it "should not create a post" do
  			expect { click_button submit }.not_to change(Post, :count)
  		end
  	end

  	describe "with valid inforamtion" do
  		before do
  			fill_in "Title", 	:with => "My title"
  			fill_in "Content",	:with => "Wish my career the best"
  		end

  		it "should create a post" do
  			expect { click_button submit }.to change(Post, :count).by(1)
  		end
  	end
  end

  describe "show post page" do
  	let(:post) { create(:post) }
  	before { visit post_path(post) }

  	it { should have_content(post.title) }
  	it { should have_content(post.content) }
  end

  describe "index" do
  	before do
      create(:post, title: "Phd will be success", content: "OK WE WILL SUCCESS")
      create(:post, title: "Career will be success", content: "GOOD WE WILL SUCCESS")
      visit posts_path
    end

    it { should_not have_link('create') }

    it "should list each post" do
      Post.all.each { |post| page.should have_selector('li', text: post.title) }
    end

    describe "when sign in as user" do
      before(:each) do
        sign_in user
        visit posts_path
      end

      it { should have_link('create') }
      it { should have_link('edit') }
      it { should have_link('delete') }

      it "should be able to delete another user" do
        expect{ click_link('delete', match: :first) }.to change(Post, :count).by(-1)
      end
    end
  end
end
