Rails.application.configure do
  # Enable compression
  config.middleware.use Rack::Deflater
  
  # Cache static assets
  config.public_file_server.headers = {
    'Cache-Control' => 'public, max-age=31536000'
  }
  
  # Compress assets
  config.assets.compress = true
  config.assets.css_compressor = :sass
  config.assets.js_compressor = :terser
end 