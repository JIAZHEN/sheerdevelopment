# Be sure to restart your server when you modify this file.

# Your secret key for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!
# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
require 'securerandom'

def secure_token
  token_file = Rails.root.join('.secret')
  if File.exist?(token_file)
    # Use the existing token.
    File.read(token_file).chomp
  else
    # Generate a new token and store it in token_file.
    token = SecureRandom.hex(64)
    File.write(token_file, token)
    token
  end
end
Blog::Application.config.secret_token = '6b243fab89308cf3eff80d05d56cd72cae9b6925be6c661cb8fbbc2d3c58306222c430bcdfeaf825ee917a2d2d99c050fc7589a9cc310bb751fc072db0b37c7b'
Blog::Application.config.secret_key_base = secure_token