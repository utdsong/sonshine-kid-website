# Be sure to restart your server when you modify this file.
Rails.application.config.assets.configure do |env|
  env.cache = Sprockets::Cache::FileStore.new(
    ENV.fetch("SPROCKETS_CACHE", "#{env.root}/tmp/cache/assets"),
    Rails.application.config.assets.cache_limit,
    env.logger
  )
end

# Enable source maps in development
Rails.application.config.assets.debug = false
Rails.application.config.assets.unknown_asset_fallback = false

# Precompile additional assets
Rails.application.config.assets.precompile += %w( critical.css ) 