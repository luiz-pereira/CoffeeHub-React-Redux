class SavedCoffee < ApplicationRecord
	belongs_to :coffee
	belongs_to :buyer
end
