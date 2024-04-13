# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

require 'square.rb'

client = Square::Client.new(
  access_token: ENV.fetch('SQUARE_ACCESS_TOKEN'),
  environment: 'sandbox'
)

result = client.catalog.list_catalog(
  types: 'CATEGORY'
)

if result.success?
  categories = result.data.objects
  puts "Fetched #{categories.count} categories"
else
  puts "Error fetching categories: #{result.errors}"
end

categories.each do |square_category|
  Category.create(
    square_id: square_category[:id],
    name: square_category[:category_data][:name] 
  )
end