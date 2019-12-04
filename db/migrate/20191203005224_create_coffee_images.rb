class CreateCoffeeImages < ActiveRecord::Migration[6.0]
  def change
    create_table :coffee_images do |t|
			t.binary :image
			t.integer :coffee_id
      t.timestamps
    end
  end
end
