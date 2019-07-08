class PostSerializer < ActiveModel::Serializer
  attributes :title, :subtitle, :content, :slug, :published, :tag_list,
              :created_at, :disqus_identifier

  def tag_list
    object.tags.map(&:name)
  end
end
