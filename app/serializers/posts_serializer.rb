class PostsSerializer < ActiveModel::Serializer
  attributes :posts, :pagination

  def posts
    object.map do |post|
      {
        title: post.title,
        subtitle: post.subtitle,
        slug: post.slug,
        tag_list: post.tags.map(&:name),
        created_at: post.created_at
      }
    end
  end

  def pagination
    {
      current_page: object.current_page,
      next_page: object.next_page,
      prev_page: object.prev_page,
      total_pages: object.total_pages,
      total_count: object.total_count
    }
  end
end
