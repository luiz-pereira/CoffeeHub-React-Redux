class Coffee < ApplicationRecord
	belongs_to :producer
	has_many :saved_coffees
	has_many :buyers, through: :saved_coffees
	has_many :tastings
	has_many :coffee_images
	has_many :coffee_videos
end
