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

  scope :published, -> { where(:published => true) }

  friendly_id :title, use: :slugged

  validates :content, 	:presence => true,
  					  	        :length   => { :minimum => 5 }
  validates :title,		  :presence => true,
  						          :length	  => { :minimum => 5 }

  alias_attribute :published?, :published

  pg_search_scope :search_by_keyword, :against => [:title, :content, :subtitle]

  def disqus_identifier
    "#{Rails.env}-post-#{id}"
  end
end
