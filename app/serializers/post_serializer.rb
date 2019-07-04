class PostSerializer < ActiveModel::Serializer
  attributes :title, :subtitle, :content, :slug, :published, :tag_list

  def tag_list
    object.tags.map(&:name)
  end
end
