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

# Fetch categories from Square
categories = client.catalog.list_catalog(
  types: 'CATEGORY'
)

if categories.success?
  categories = categories.data.objects
  puts "Fetched #{categories.count} categories"
else
  puts "Error fetching categories: #{categories.errors}"
end

categories.each do |square_category|
  if Category.exists?(square_id: square_category[:id])
    Category.find_by(square_id: square_category[:id]).update(
      name: square_category[:category_data][:name]
    )
  else
    Category.create!(
      square_id: square_category[:id],
      name: square_category[:category_data][:name] 
    )
  end
end

puts "Created/Updated #{Category.count} categories"

# Fetch products from Square
products = client.catalog.list_catalog(
  types: 'ITEM'
)

if products.success?
  products = products.data.objects
  puts "Fetched #{products.count} products"
  # puts products
else
  puts "Error fetching products: #{products.errors}"
end

product_images = client.catalog.batch_retrieve_catalog_objects(
  body: {
    object_ids: products.map { |product| product[:id] },
    include_related_objects: true
  }
)

products.each do |square_item|
  product_image = product_images.data.related_objects.find { |object| object[:id] == square_item[:item_data][:image_ids][0] }

  if Product.exists?(square_id: square_item[:id])
    Product.find_by(square_id: square_item[:id]).update(
      name: square_item[:item_data][:name],
      category_id: square_item[:item_data][:categories][0][:id],
      description: square_item[:item_data][:description],
      price: square_item[:item_data][:variations][0][:item_variation_data][:price_money][:amount],
      image_url: product_image[:image_data][:url] || nil
    )
  else
      Product.create!(
        square_id: square_item[:id],
        name: square_item[:item_data][:name],
        category_id: square_item[:item_data][:categories][0][:id],
        description: square_item[:item_data][:description],
        price: square_item[:item_data][:variations][0][:item_variation_data][:price_money][:amount],
        image_url: product_image[:image_data][:url] || nil
      )
    puts "Created product: #{square_item[:item_data][:name]}"
  end
end

puts "Created/Updated #{Product.count} products"