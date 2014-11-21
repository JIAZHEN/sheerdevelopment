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

class Post < ActiveRecord::Base
  extend FriendlyId

  before_save :random_avatar

  friendly_id :title, use: :slugged

  validates :content, 	:presence => true,
  					  	        :length   => { :minimum => 5 }
  validates :title,		  :presence => true,
  						          :length	  => { :minimum => 5 }

  private

  def random_avatar
    if self.avatar_url.nil? || self.avatar_url.empty?
      suckr = ImageSuckr::GoogleSuckr.new
      self.avatar_url = suckr.get_image_url("q" => "animation image")
    end
  end
end
