class Product < ApplicationRecord

  def self.create_product(name, category_id, description, price, square_id, image_url)
    product = Product.new(name: name, category_id: category_id, description: description, price: price, square_id: square_id, image_url: image_url)
    product.save
  end

  def self.update_product(id, name, category_id, description, price, image_url)
    product = Product.find(id)
    product.update(name: name, category_id: category_id, description: description, price: price, image_url: image_url)
  end

  def self.delete_product(id)
    product = Product.find(id)
    product.destroy!
  end

  def self.get_products
    Product.all
  end

  def self.get_product(id)
    Product.find(id)
  end

  def self.get_category_products(category_id)
    Category.find(category_id).products
  end
end
