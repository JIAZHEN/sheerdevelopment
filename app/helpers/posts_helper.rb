module PostsHelper
  def meta_keywords(post = nil)
    (post && post.tag_list.to_s) || "Typescript, Engineering Manager, Ruby, Clojure".freeze
  end

  def meta_description(post = nil)
    (post && post.subtitle) || "Jiazhen Xie is a Engineering Manager / Applied Machine Learning Engineer based in London, United Kingdom. He is passionate about AI, leadership, processes and team performance.".freeze
  end
end
