module ApplicationHelper

	def full_title(page_title)
		base_title = 'Mr Jiazhen Xie | University of Birmingham'
		if page_title.empty?
			base_title
		else
			"#{base_title} | #{page_title}"
		end
	end

end
