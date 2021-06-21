module PostsHelper
  def meta_keywords(post = nil)
    (post && post.tag_list.to_s) || "Ruby, Lead Software Engineer, Ruby on Rails".freeze
  end

  def meta_description(post = nil)
    (post && post.subtitle) || "Jiazhen Xie (Joe) is a Lead Software Engineer / Rubyist based in London, United Kingdom. He is passionate about web application and backend processes.".freeze
  end
end
