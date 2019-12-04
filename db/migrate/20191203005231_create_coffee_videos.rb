class CreateCoffeeVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :coffee_videos do |t|
			t.binary :video
			t.integer :coffee_id
      t.timestamps
    end
  end
end
