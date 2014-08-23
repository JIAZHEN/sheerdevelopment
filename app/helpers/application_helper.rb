module ApplicationHelper

	def full_title(page_title)
		base_title = 'Jiazhen Xie | Dev in Test'
		if page_title.empty?
			base_title
		else
			"#{base_title} | #{page_title}"
		end
	end

  def markdown
    parser ||= Redcarpet::Markdown.new(Redcarpet::Render::HTML, fenced_code_blocks: true, autolink: true)
  end

  def summarise(content)
    content.split[0..50].join(' ') + '.....'
  end
end
