class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :square_id
      t.string :name
      t.string :category_id
      t.string :description
      t.decimal :price
      t.string :image_url

      t.timestamps
    end
  end
end
