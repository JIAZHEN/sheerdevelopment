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

  friendly_id :title, use: :slugged

  validates :content, 	:presence => true,
  					  	        :length   => { :minimum => 5 }
  validates :title,		  :presence => true,
  						          :length	  => { :minimum => 5 }

end
