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
  include PgSearch
  extend FriendlyId

  friendly_id :title, use: :slugged

  validates :content, 	:presence => true,
  					  	        :length   => { :minimum => 5 }
  validates :title,		  :presence => true,
  						          :length	  => { :minimum => 5 }

  has_attached_file :image, styles: { small: "64x64", med: "288x192", large: "1440x960" }
  validates_attachment :image,
    :size => { :in => 0..10.megabytes },
    :content_type => { :content_type => /^image\/(jpeg|png|gif|tiff)$/ }

  pg_search_scope :search_by_keyword, :against => [:title, :content, :subtitle]
end
