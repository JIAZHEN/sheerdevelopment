# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string(255)
#  last_sign_in_ip        :string(255)
#  created_at             :datetime
#  updated_at             :datetime
#

require 'spec_helper'

describe User do
  before { @user = User.new(email: "jxie@example.com", password: "password", password_confirmation: "password") }
  subject { @user }

  it { should respond_to(:email) }
  it { should respond_to(:password) }
  it { should respond_to(:password_confirmation) }
  it { should be_valid }

  describe "#email" do
    describe "is not present" do
      before { @user.email = " " }
      it { should be_invalid }
    end

    describe "is taken" do
      before do
        another_user = @user.dup
        another_user.save
      end
      it { should be_invalid }
    end

    describe "format is incorrect" do
      it "should not be valid" do
        addresses = %w[user@foo,com user_at_foo.org example.user@foo. foo@bar_baz.com foo@bar+baz.com]
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

  describe "#password" do
    describe "is not present" do
      before { @user.password = " " }
      it { should be_invalid }
    end

    describe "is shorter than 8" do
      before { @user.password = "a" }
      it { should be_invalid }
    end
  end

  describe "when password confirmation is blank" do
    before { @user.password_confirmation = " " }
    it { should be_invalid }
  end

  describe "when password confirmation doesn't match password" do
    before { @user.password_confirmation = "NOT MATCH" }
    it { should be_invalid }
  end
end
