require "spec_helper"

describe User do
  before do
    @user = User.new(username: "joe", email: "jxie@example.com",
                     password: "foobar", password_confirmation: "foobar")
  end

  subject { @user }

  it { is_expected.to respond_to(:username) }
  it { is_expected.to respond_to(:email) }
  it { is_expected.to respond_to(:admin) }
  it { is_expected.to respond_to(:password_digest) }
  it { is_expected.to respond_to(:password) }
  it { is_expected.to respond_to(:password_confirmation) }
  it { is_expected.to respond_to(:authenticate) }
  it { is_expected.to respond_to(:remember_token) }
  it { is_expected.not_to be_admin }

  describe "with admin attribute set to 'true'" do
    before do
      @user.save!
      @user.toggle!(:admin)
    end
    it { should be_admin }
  end

  describe "remember token" do
    before { @user.save }

    it "must generate the token" do
      expect(@user.remember_token).not_to be_blank
    end
  end

  describe "#email" do
    describe "not present" do
      before { @user.email = " " }
      it { is_expected.not_to be_valid }
    end

    describe "has been used" do
      before do
        user_with_same_email = @user.dup
        user_with_same_email.email.upcase!
        user_with_same_email.save
      end
      it { is_expected.not_to be_valid }
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
    before { @user.username = " " }
    it { is_expected.not_to be_valid }
  end

  describe "#password&password_confirmation" do
    before do
      @user = User.new(username: "joe", email: "jxie@example.com",
                       password: " ", password_confirmation: " ")
    end
    it { is_expected.not_to be_valid }

    describe "do not match" do
      before { @user.password_confirmation = "do not match" }
      it { is_expected.not_to be_valid }
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
        specify { expect(user_for_invalid_password).to eq false }
      end
    end
  end
end
