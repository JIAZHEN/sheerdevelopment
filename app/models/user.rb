class User < ActiveRecord::Base
  before_save { self.email = email.downcase }
  attr_accessible :admin, :email, :name, :password, :password_confirmation
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i

  validates :email, presence: true, 
                    uniqueness: { case_sensitive: false },
                    format: { with: VALID_EMAIL_REGEX }
  validates :name,  presence: true

  has_secure_password
end
