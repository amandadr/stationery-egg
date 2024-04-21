require 'square.rb'

class Category < ApplicationRecord

  def self.create_category(name, square_id)
    category = Category.new(name: name, square_id: square_id)
    category.save
  end

  def self.update_category(id, name)
    category = Category.find(id)
    category.update(name: name)
  end

  def self.delete_category(id)
    category = Category.find(id)
    category.destroy!
  end

  def self.get_categories
    Category.all
  end

  def self.get_category(id)
    Category.find(id)
  end

  def self.get_square_categories(square_id)
    Square.find(square_id).categories
  end
end