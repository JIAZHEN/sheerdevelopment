class CallBackPostsUrl < ActiveRecord::Migration
  def up
    Post.update_all(url: 'http://www.jpl.nasa.gov/spaceimages/images/mediumsize/PIA17011_ip.jpg')
  end

  def down
    remove_column :posts, :url
  end
end
