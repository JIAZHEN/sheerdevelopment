# Set the host name for URL creation
SitemapGenerator::Sitemap.default_host = "http://sheerdevelopment.com/"

SitemapGenerator::Sitemap.public_path = "public/sitemaps/"

SitemapGenerator::Sitemap.create do
  add posts_path, changefreq: 'weekly'
  add root_path
  add about_path
  add signin_path, priority: 0.0

  Post.find_each do |post|
    add post_path(post.slug), lastmod: post.updated_at
  end
end
