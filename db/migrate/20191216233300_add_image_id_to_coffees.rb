class AddImageIdToCoffees < ActiveRecord::Migration[6.0]
	def change
		add_column :coffees, :imagefile_id, :string
  end
end
