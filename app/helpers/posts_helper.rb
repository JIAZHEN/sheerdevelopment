module PostsHelper
  def meta_keywords(post = nil)
    (post && post.tag_list.to_s) || "Ruby, Lead Software Engineer, Ruby on Rails".freeze
  end

  def meta_description(post = nil)
    (post && post.subtitle) || "Jiazhen Xie is a Lead Software Engineer / Applied Machine Learning Engineer based in London, United Kingdom. He is passionate about AI, backend processes and team performance.".freeze
  end
end
