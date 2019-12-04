class Tasting < ApplicationRecord
	belongs_to :coffee
	belongs_to :buyer
	belongs_to :producer, through: :coffee
end
