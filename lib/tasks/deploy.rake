namespace :deploy do
  desc "To deploy the app easily"
  task basic: :environment do
    sh "git fetch && git pull"
    Rake::Task["deploy:restart"].invoke
  end

  # Load env config before running this task
  task complete: :environment do
    sh "git fetch && git pull"
    sh "rm -rf public/assets/"
    sh "bundle install"
    Rake::Task["db:migrate"].invoke
    Rake::Task["assets:precompile"].invoke
    Rake::Task["deploy:restart"].invoke
    Rake::Task["sitemap:refresh"].invoke
  end

  task restart: :environment do
    sh "service unicorn stop"
    sleep 5
    sh "service unicorn start"
  end
end
