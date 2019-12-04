class CreateSavedCoffees < ActiveRecord::Migration[6.0]
  def change
    create_table :saved_coffees do |t|
			t.integer :coffee_id
			t.integer :buyer_id
      t.timestamps
    end
  end
end
