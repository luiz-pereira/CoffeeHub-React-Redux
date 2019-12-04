class CreateTastings < ActiveRecord::Migration[6.0]
  def change
    create_table :tastings do |t|
			t.integer :coffee_id
			t.integer :buyer_id
			t.datetime :tasting_date
			t.string :status
			t.string :impressions
      t.timestamps
    end
  end
end
