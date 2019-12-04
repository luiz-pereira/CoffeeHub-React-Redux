class CreateCoffees < ActiveRecord::Migration[6.0]
  def change
    create_table :coffees do |t|
			t.string :name
			t.text :description
			t.integer :producer_id
      t.timestamps
    end
  end
end
