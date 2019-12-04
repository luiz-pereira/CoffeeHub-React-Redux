class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
			t.string :name
			t.string :type
			t.string :password_digest
			t.string :email
			t.string :company
      t.timestamps
    end
  end
end
