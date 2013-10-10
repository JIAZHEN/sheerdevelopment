require 'spec_helper'

describe User do
  before do
    @user = User.new(name: "joe", email: "jxie@example.com", 
                     password: "foobar", password_confirmation: "foobar")
  end

  subject { @user }

  it { should respond_to(:name) }
  it { should respond_to(:email) }
  it { should respond_to(:admin) }
  it { should respond_to(:password_digest) }
  it { should respond_to(:password) }
  it { should respond_to(:password_confirmation) }
  it { should respond_to(:authenticate) }

  describe "#email" do
    describe "not present" do
      before { @user.email = " " }
      it { should_not be_valid }
    end

    describe "has been used" do
      before do
        user_with_same_email = @user.dup
        user_with_same_email.email.upcase!
        user_with_same_email.save
      end
      it { should_not be_valid }
    end

    describe "format is incorrect" do
      it "should not be valid" do
        addresses = %w[user@foo,com user_at_foo.org example.user@foo.
                       foo@bar_baz.com foo@bar+baz.com]
        addresses.each do |invalid_address|
          @user.email = invalid_address
          expect(@user).not_to be_valid
        end
      end
    end

    describe "format is correct" do
      it "should be valid" do
        addresses = %w[user@foo.COM A_US-ER@f.b.org frst.lst@foo.jp a+b@baz.cn]
        addresses.each do |valid_address|
          @user.email = valid_address
          expect(@user).to be_valid
        end
      end
    end
  end

  describe "when name is not present" do
    before { @user.name = " " }
    it { should_not be_valid }
  end

  describe "#password&password_confirmation" do
    before do
      @user = User.new(name: "joe", email: "jxie@example.com", 
                       password: " ", password_confirmation: " ")
    end
    it { should_not be_valid }

    describe "do not match" do
      before { @user.password_confirmation = "do not match" }
      it { should_not be_valid }
    end
  end

  describe "#authenticate" do
    describe "return value" do
      before { @user.save }
      let(:found_user) { User.find_by_email(@user.email) }

      describe "with a valid password" do
        it { should eq found_user.authenticate(@user.password) }
      end

      describe "with an invalid password" do
        let(:user_for_invalid_password) { found_user.authenticate("invalid") }
        it { should_not eq user_for_invalid_password }
        specify { expect(user_for_invalid_password).to be_false }
      end
    end
  end
end