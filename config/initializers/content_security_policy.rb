# Be sure to restart your server when you modify this file.

# Define an application-wide content security policy
# For further information see the following documentation
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy

Rails.application.config.content_security_policy do |policy|
  policy.default_src :self, :https
  policy.font_src    :self, :https, :data
  policy.img_src     :self, "https://*.stripe.com"
  policy.object_src  :none
  policy.style_src   :self, :unsafe_inline
  policy.script_src  :self, :unsafe_inline, "https://bentodev.myshopify.com", "https://cdn.jsdelivr.net", "https://js.stripe.com"
  policy.frame_src   :self, "https://google-analytics.com/", "https://js.stripe.com", "https://hooks.stripe.com"
  policy.connect_src :self, "https://api.stripe.com"
end

# If you are using UJS then enable automatic nonce generation
# Rails.application.config.content_security_policy_nonce_generator = -> request { SecureRandom.base64(16) }

# Set the nonce only to specific directives
# Rails.application.config.content_security_policy_nonce_directives = %w(script-src)

# Report CSP violations to a specified URI
# For further information see the following documentation:
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only
# Rails.application.config.content_security_policy_report_only = true
