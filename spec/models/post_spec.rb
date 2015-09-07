# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  content    :text
#  created_at :datetime
#  updated_at :datetime
#  slug       :string(255)
#

require 'spec_helper'

describe Post do
  before { @post = Post.new(title: 'my title', content: 'Wish my career the best') }
  subject { @post }

  it { should respond_to(:title) }
  it { should respond_to(:content) }
  it { should respond_to(:subtitle) }
  it { should be_valid }

  describe "when avatar_url is not present" do
    let(:post)        { Post.last }

    context "after save" do
      before do
        @post.save
      end

      it "is set by random image after save" do
        expect(post.avatar_url).to eq(avatar_url)
      end
    end
  end

  describe "when title is not present" do
  	before { @post.title = '' }
  	it { should_not be_valid }
  end

  describe "when title is too short" do
    before { @post.title = 'a' * 4 }
    it { should_not be_valid }
  end

  describe "when content is not present" do
  	before { @post.content = '' }
  	it { should_not be_valid }
  end

  describe "when content is too short" do
    before { @post.content = 'a' * 4 }
    it { should_not be_valid }
  end
end
