class AddcolumnsToCoffee < ActiveRecord::Migration[6.0]
	def change
		
		add_column :coffees, :sweetness, :integer
		add_column :coffees, :body, :integer
		add_column :coffees, :acidity, :integer
		add_column :coffees, :country, :string
		add_column :coffees, :town, :string

  end
end
