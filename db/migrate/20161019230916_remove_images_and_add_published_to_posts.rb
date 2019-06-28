class RemoveImagesAndAddPublishedToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :published, :boolean, defalt: false
    add_index :posts, :published
  end
end
