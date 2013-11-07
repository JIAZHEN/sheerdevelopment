# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ActiveRecord::Base
  extend FriendlyId
  attr_accessible :content, :title

  friendly_id :title, use: :slugged

  validates :content, 	:presence => true,
  					  	        :length   => { :minimum => 5 }
  validates :title,		  :presence => true,
  						          :length	  => { :minimum => 5 }

end
